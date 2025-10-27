// src/db/product.repo.ts

// We import the specific type from 'expo-sqlite' to match your db.ts
import type { SQLiteDatabase } from 'expo-sqlite'; 
import { getDbConnection } from './db';
import type { Product } from '../models/types';

/**
 * (For initDb) Seeds the database with sample products.
 * We pass 'db: SQLiteDatabase' to ensure it runs in the same context/transaction
 * as the table creation.
 */
export const seedInitialProducts = async (db: SQLiteDatabase) => {
  try {
    const result = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM products'
    );

    if (result && result.count === 0) {
      console.log('Seeding product data...');
      const sampleProducts: Product[] = [
        { product_id: 'p1', name: 'Áo Thun React', price: 250000, stock: 10 },
        { product_id: 'p2', name: 'Mũ Lưỡi Trai TS', price: 150000, stock: 5 },
        { product_id: 'p3', name: 'Balo Native', price: 500000, stock: 8 },
        { product_id: 'p4', name: 'Ly Sứ Coder', price: 120000, stock: 0 },
      ];

      // Use a transaction for safety
      await db.withTransactionAsync(async () => {
        for (const p of sampleProducts) {
          await db.runAsync(
            'INSERT INTO products (product_id, name, price, stock) VALUES (?, ?, ?, ?)',
            [p.product_id, p.name, p.price, p.stock]
          );
        }
      });
      console.log('Product seeding successful!');
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

/**
 * Gets all products from the database.
 */
export const getProducts = async (): Promise<Product[]> => {
  const db = await getDbConnection();
  return db.getAllAsync<Product>('SELECT * FROM products ORDER BY name');
};

/**
 * (Helper for Cart) Gets the stock for a single product.
 * Must pass the 'db' object to be used inside a transaction.
 */
export const getProductStock = async (
  productId: string,
  db: SQLiteDatabase // Receives the DB from the transaction
): Promise<number | null> => {
  const product = await db.getFirstAsync<{ stock: number }>(
    'SELECT stock FROM products WHERE product_id = ?',
    [productId]
  );
  return product?.stock ?? null;
};

/**
 * (Helper for Cart) Updates the stock for a single product.
 * Must pass the 'db' object to be used inside a transaction.
 */
export const updateProductStock = async (
  productId: string,
  newStock: number,
  db: SQLiteDatabase // Receives the DB from the transaction
) => {
  await db.runAsync('UPDATE products SET stock = ? WHERE product_id = ?', [
    newStock,
    productId,
  ]);
};

