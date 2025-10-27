

// src/models/types.ts
/**
 * Đại diện cho cấu trúc bảng 'products'
 */
export interface Product {
  product_id: string; // Khóa chính dạng TEXT
  name: string;
  price: number;
  stock: number;
}

/**
 * Đại diện cho cấu trúc bảng 'cart_items'
 */
export interface CartItem {
  id: number; // Khóa chính tự tăng
  product_id: string;
  qty: number;
}

/**
 * Dùng khi hiển thị giỏ hàng, bao gồm chi tiết sản phẩm
 */
export interface CartItemDetails extends CartItem {
  name: string;
  price: number;
}

