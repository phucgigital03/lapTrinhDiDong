import { fetchCart } from "@/redux/cartSlice";
import { router } from "expo-router";
import { useEffect } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import {useDispatch,useSelector} from 'react-redux'

export default function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, name, cartItems } = useSelector((state) => state.carts);

  useEffect(()=>{
    dispatch(fetchCart())
  },[])


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Cart page</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ borderBottomWidth: 1, borderColor: "black", marginTop: 6 }}
          >
            <Text>{item.name}</Text>
            <Text>{item.qty}</Text>
            <Text>{item.des}</Text>

            <View>
              <Pressable
                onPress={() => {
                  // router.push(`/product/${item.id}`);
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
              
            </View>
          </View>
        )}
      />
    </View>
  );
}
