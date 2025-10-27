// app/cart.tsx
import { Link } from 'expo-router';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';

// Import types and functions
import { CartItemDetails } from '../src/models/types';
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity, // Import function mới
} from '../src/db/cart.repo';

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);

  // Hàm tải dữ liệu giỏ hàng
  const loadCart = async () => {
    try {
      const items = await getCartItems();
      setCartItems(items);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to load cart.');
    }
  };

  // useFocusEffect sẽ chạy mỗi khi màn hình này được focus
  // Rất hữu ích để cập nhật giỏ hàng khi người dùng quay lại
//   useFocusEffect(
//     useCallback(() => {
//       loadCart();
//     }, [])
//   );
    useEffect(()=>{
        loadCart();
    },[])

  // Xử lý tăng/giảm số lượng
  const handleUpdateQty = async (
    item: CartItemDetails,
    newQty: number
  ) => {
    const result = await updateCartQuantity(item.id, newQty);

    if (!result.success) {
      // Hiển thị lỗi (ví dụ: "Không đủ tồn kho")
      Alert.alert('Error', result.message);
    }

    // Tải lại giỏ hàng để cập nhật UI
    loadCart();
  };

  // Xử lý xóa item
  const handleDelete = (item: CartItemDetails) => {
    Alert.alert(
      'Remove Item',
      `Are you sure you want to remove ${item.name} from the cart?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            await removeFromCart(item.id);
            loadCart(); // Tải lại giỏ hàng
          },
        },
      ]
    );
  };

  // Tính tổng tiền
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Giao diện cho mỗi item
  const renderItem = ({ item }: { item: CartItemDetails }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>Price: ${item.price.toFixed(2)}</Text>
        <Text style={styles.itemTotal}>
          Total: ${(item.price * item.qty).toFixed(2)}
        </Text>
      </View>
      <View style={styles.itemControls}>
        <View style={styles.quantityControls}>
          <Button title=" - " onPress={() => handleUpdateQty(item, item.qty - 1)} />
          <Text style={styles.quantityText}>{item.qty}</Text>
          <Button title=" + " onPress={() => handleUpdateQty(item, item.qty + 1)} />
        </View>
        <Button
          title="Remove"
          color="red"
          onPress={() => handleDelete(item)}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.title}>Your Cart</Text>}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
            <Link href="/" style={styles.shopLink}>
              Start Shopping
            </Link>
          </View>
        }
      />
      
      {/* Footer hiển thị tổng tiền và nút xem hóa đơn */}
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>
            Total: ${totalPrice.toFixed(2)}
          </Text>
          <Link href="/invoice" asChild>
            <Button title="View Invoice" />
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemControls: {
    alignItems: 'flex-end',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  shopLink: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 15,
  },
});

