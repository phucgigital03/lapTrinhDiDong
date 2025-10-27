// app/invoice.tsx
import { useFocusEffect } from 'expo-router';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useState, useCallback } from 'react';

// Import types and functions
import { CartItemDetails } from '../src/models/types';
import { getCartItems } from '../src/db/cart.repo';

// Tùy chọn: Đặt % VAT
const VAT_RATE = 0.1; // 10%

export default function Invoice() {
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);

  // Lấy ngày giờ hiện tại
  const currentDate = new Date().toLocaleString();

  // Hàm tải dữ liệu giỏ hàng
  const loadInvoiceData = async () => {
    try {
      const items = await getCartItems();
      setCartItems(items);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to load invoice data.');
    }
  };

  // Tải dữ liệu khi màn hình được focus
  useFocusEffect(
    useCallback(() => {
      loadInvoiceData();
    }, [])
  );

  // --- Tính toán ---
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;
  // -----------------

  // Giao diện cho mỗi dòng hàng
  const renderItem = ({ item }: { item: CartItemDetails }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
      <Text style={styles.cell}>{item.qty}</Text>
      <Text style={[styles.cell, { textAlign: 'right' }]}>
        ${item.price.toFixed(2)}
      </Text>
      <Text style={[styles.cell, { textAlign: 'right' }]}>
        ${(item.price * item.qty).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Invoice</Text>
            <Text style={styles.date}>Date: {currentDate}</Text>
            {/* Tiêu đề bảng */}
            <View style={[styles.row, styles.tableHeader]}>
              <Text style={[styles.cell, styles.headerText, { flex: 3 }]}>
                Item
              </Text>
              <Text style={[styles.cell, styles.headerText]}>Qty</Text>
              <Text style={[styles.cell, styles.headerText, { textAlign: 'right' }]}>
                Price
              </Text>
              <Text style={[styles.cell, styles.headerText, { textAlign: 'right' }]}>
                Total
              </Text>
            </View>
          </>
        }
        ListFooterComponent={
          <View style={styles.totalsContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>VAT ({VAT_RATE * 100}%)</Text>
              <Text style={styles.totalValue}>${vat.toFixed(2)}</Text>
            </View>
            <View style={[styles.totalRow, styles.grandTotal]}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderColor: '#ddd',
  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  totalsContainer: {
    marginTop: 20,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
  },
  grandTotal: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
