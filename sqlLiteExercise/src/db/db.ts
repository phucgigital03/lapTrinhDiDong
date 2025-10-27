// src/db/db.ts

// --- Correct Imports for Async API ---
// We use 'expo-sqlite/async' to get both the async functions
// and the correct 'Database' type.
import { openDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite';
import { seedInitialProducts } from './product.repo'; // Import seeder

const DATABASE_NAME = 'myAppDb.db';

// --- Use 'Database' type ---
let _db: SQLiteDatabase | null = null;

/**
 * Gets the database connection.
 * Opens a new connection if one doesn't exist.
 */
// --- Use 'Database' type ---
export const getDbConnection = async (): Promise<SQLiteDatabase> => {
  if (_db) {
    return _db;
  }
  _db = await openDatabaseAsync(DATABASE_NAME);
  return _db;
};

/**
 * Creates the database tables.
 * --- THIS FUNCTION IS REPLACED ---
 */
// --- Use 'Database' type ---
const createTables = async (db: SQLiteDatabase) => {
  // Enable foreign key support
  await db.execAsync('PRAGMA foreign_keys = ON;');

  const productsQuery = `
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name       TEXT NOT NULL,
      price      REAL NOT NULL CHECK(price>=0),
      stock      INTEGER NOT NULL CHECK(stock>=0)
    );`;

  const cartItemsQuery = `
    CREATE TABLE IF NOT EXISTS cart_items(
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty        INTEGER NOT NULL CHECK(qty>0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );`;

  await db.execAsync(productsQuery);
  await db.execAsync(cartItemsQuery);
  console.log('Tables created successfully (with new constraints)!');
};

/**
 * Main initialization function, called when the app starts.
 */
export const initDb = async () => {
  try {
    const db = await getDbConnection();
    await createTables(db);
    // Call the seeder from the repository
    await seedInitialProducts(db);
  } catch (error) {
    console.error('Error initializing DB:', error);
    throw error;
  }
};