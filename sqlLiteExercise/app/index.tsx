// app/index.tsx
import { Link, } from 'expo-router';
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

// Import types and functions from our DB files
import { Product } from '../src/models/types';
import { getProducts } from '../src/db/product.repo';
import { addToCart } from '../src/db/cart.repo';

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  // Function to load products
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to load products.');
    }
  };

  // useFocusEffect runs every time the screen comes into view
  // useFocusEffect(
  //   useCallback(() => {
  //     loadProducts();
  //   }, [])
  // );
  useEffect(()=>{
    loadProducts();
  },[]);

  // Handle the 'Add to Cart' button press
  const handleAddToCart = async (product: Product) => {
    // UI check for instant feedback
    if (product.stock === 0) {
      Alert.alert('Out of Stock', 'This product is currently unavailable.');
      return;
    }

    // Call the repository function
    const result = await addToCart(product.product_id, 1);

    if (result.success) {
      Alert.alert('Success', result.message);
    } else {
      Alert.alert('Error', result.message);
    }
    
    // We don't need to reload products here because
    // our new logic doesn't change the 'stock' value
  };

  // How to render each item in the list
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>Price: ${item.price.toFixed(2)}</Text>
        <Text style={item.stock === 0 ? styles.stockOut : styles.stockIn}>
          Stock: {item.stock}
        </Text>
      </View>
      <Button
        title="Add to Cart"
        onPress={() => handleAddToCart(item)}
        disabled={item.stock === 0} // Disable button if out of stock
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
        <Link href={'/cart'} style={styles.cartLink}>
          Go to Cart
        </Link>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartLink: {
    fontSize: 16,
    color: '#007AFF',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 5,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
  },
  stockIn: {
    color: 'green',
  },
  stockOut: {
    color: 'red',
  },
});

