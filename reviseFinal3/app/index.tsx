import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

export default function Index() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const fetchPro = async () => {
    try {
      const res = await axios.get(
        "https://692d3c42e5f67cd80a4aa90c.mockapi.io/products"
      );
      if (res.data) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPro();
  }, []);

  const handleAddCart = (item) => {
    const newItem = {
      ...item,
      qty: 1,
      cartId: "1",
    };
    dispatch(addToCart(newItem));
  };



  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [des, setDes] = useState("");
  const handleAddProduct = async () => {
    const newPro = {
      name,
      qty: Number(qty),
      des,
    };
    const res = await axios.post(
      `https://692d3c42e5f67cd80a4aa90c.mockapi.io/products`,
      newPro
    );
    console.log(res);
  };

  const handleDelePro = async (id)=>{
    const res = await axios.delete(`https://692d3c42e5f67cd80a4aa90c.mockapi.io/products/${id}`)
    console.log(res)
  }

  const handleUpdatePro = async (id)=>{
    const res = await axios.put(`https://692d3c42e5f67cd80a4aa90c.mockapi.io/products/${id}`, {
      qty: 1,
      des: "updated",
    })
    console.log(res)
  }

  return (
    <View
      style={
        {
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <View>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, width: "80%" }}
          placeholder="New name"
        />
        <TextInput
          value={qty}
          onChangeText={setQty}
          style={{ borderWidth: 1, width: "80%" }}
          placeholder="New qty"
        />
        <TextInput
          value={des}
          onChangeText={setDes}
          style={{ borderWidth: 1, width: "80%" }}
          placeholder="New name"
        />

        <Pressable
          onPress={() => {
            handleAddProduct();
          }}
          style={{
            backgroundColor: "grey",
            padding: 5,
            width: 100,
            height: 40,
          }}
        >
          <Text>Add Product</Text>
        </Pressable>
      </View>
      <Text>List of products</Text>
      <Pressable
        onPress={() => {
          router.push(`/cart`);
        }}
        style={{
          backgroundColor: "yellow",
          padding: 5,
          width: 100,
          height: 40,
        }}
      >
        <Text>Xem cart</Text>
      </Pressable>

      <ScrollView>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "black",
                marginTop: 6,
              }}
            >
              <Text>{item.name}</Text>
              <Text>{item.qty}</Text>
              <Text>{item.des}</Text>

              <View>
                <Pressable
                  onPress={() => {
                    handleDelePro(item.id)
                  }}
                  style={{
                    backgroundColor: "red",
                    padding: 5,
                    width: 100,
                    height: 40,
                  }}
                >
                  <Text>Delete</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleUpdatePro(item.id)
                  }}
                  style={{
                    backgroundColor: "blue",
                    padding: 5,
                    width: 100,
                    height: 40,
                  }}
                >
                  <Text>Update</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    handleAddCart(item);
                  }}
                  style={{
                    backgroundColor: "green",
                    padding: 5,
                    width: 100,
                    height: 40,
                  }}
                >
                  <Text>Add to cart</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
