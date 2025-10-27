// src/db/cart.repo.ts

// We use 'expo-sqlite' to get the type (to match your db.ts)
import type { SQLiteDatabase } from 'expo-sqlite';
import { getDbConnection } from './db';
import type { CartItem, CartItemDetails, Product } from '../models/types';
// We no longer need getProductStock or updateProductStock from product.repo

/**
 * Lấy tất cả item trong giỏ hàng (kèm chi tiết sản phẩm)
 */
export const getCartItems = async (): Promise<CartItemDetails[]> => {
  const db = await getDbConnection();
  const query = `
    SELECT 
        c.id, 
        c.product_id, 
        c.qty,
        p.name,
        p.price
    FROM cart_items c
    JOIN products p ON c.product_id = p.product_id
    ORDER BY p.name;
  `;
  return db.getAllAsync<CartItemDetails>(query);
};

/**
 * --- UPDATED Add to Cart Logic ---
 * Thêm sản phẩm vào giỏ và kiểm soát tồn kho
 */
export const addToCart = async (
  productId: string,
  quantityToAdd: number
): Promise<{ success: boolean; message: string }> => {
  const db = await getDbConnection();

  try {
    await db.withTransactionAsync(async () => {
      // 1. Get the product's total stock
      const product = await db.getFirstAsync<Product>(
        'SELECT stock FROM products WHERE product_id = ?',
        [productId]
      );

      if (!product) {
        throw new Error('Sản phẩm không tồn tại.');
      }
      const totalStock = product.stock;

      if (totalStock === 0) {
        throw new Error('Sản phẩm đã hết hàng.');
      }

      // 2. Get current cart quantity
      const existingItem = await db.getFirstAsync<CartItem>(
        'SELECT qty FROM cart_items WHERE product_id = ?',
        [productId]
      );
      const currentCartQty = existingItem?.qty || 0;

      // 3. This is the new, correct check!
      const newCartQty = currentCartQty + quantityToAdd;
      if (newCartQty > totalStock) {
        throw new Error(
          `Không thể thêm. Đã đạt giới hạn tồn kho (${totalStock}).`
        );
      }

      // 4. Insert or Update cart in one command
      // This works because of your 'UNIQUE(product_id)' constraint
      await db.runAsync(
        `INSERT INTO cart_items (product_id, qty)
         VALUES (?, ?)
         ON CONFLICT(product_id)
         DO UPDATE SET qty = ?;`,
        [productId, newCartQty, newCartQty]
      );
    });

    return { success: true, message: 'Thêm vào giỏ hàng thành công!' };
  } catch (error) {
    console.error('Lỗi khi thêm vào giỏ:', (error as Error).message);
    return {
      success: false,
      message: (error as Error).message || 'Lỗi không xác định',
    };
  }
};

/**
 * Xóa một item khỏi giỏ hàng
 * (Note: This logic no longer needs to 'refund' stock)
 */
export const removeFromCart = async (cartItemId: number): Promise<void> => {
  const db = await getDbConnection();
  try {
    await db.runAsync('DELETE FROM cart_items WHERE id = ?', [cartItemId]);
  } catch (error) {
    console.error('Lỗi khi xóa khỏi giỏ:', error);
  }
};

export const updateCartQuantity = async (
  cartItemId: number,
  newQuantity: number
): Promise<{ success: boolean; message: string }> => {
  const db = await getDbConnection();

  // 1. Nếu số lượng mới là 0 hoặc âm, chỉ cần xóa item
  if (newQuantity <= 0) {
    await removeFromCart(cartItemId); // Dùng lại hàm removeFromCart
    return { success: true, message: 'Item removed from cart.' };
  }

  // 2. Nếu số lượng mới > 0, kiểm tra tồn kho
  try {
    let success = false;
    let message = '';

    await db.withTransactionAsync(async () => {
      // Lấy tồn kho của sản phẩm tương ứng
      const productInfo = await db.getFirstAsync<{ stock: number }>(
        `SELECT p.stock
         FROM cart_items c
         JOIN products p ON c.product_id = p.product_id
         WHERE c.id = ?`,
        [cartItemId]
      );

      if (!productInfo) {
        throw new Error('Item not found in cart.');
      }

      // Kiểm tra tồn kho
      if (newQuantity > productInfo.stock) {
        message = `Cannot add more. Only ${productInfo.stock} in stock.`;
        throw new Error(message);
      }

      // Cập nhật số lượng
      await db.runAsync('UPDATE cart_items SET qty = ? WHERE id = ?', [
        newQuantity,
        cartItemId,
      ]);

      success = true;
      message = 'Quantity updated.';
    });

    return { success, message };
  } catch (error) {
    console.log('Error updating quantity:', (error as Error).message);
    return {
      success: false,
      message: (error as Error).message || 'Failed to update quantity.',
    };
  }
};

