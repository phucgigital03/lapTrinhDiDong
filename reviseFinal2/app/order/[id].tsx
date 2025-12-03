import {
  addOrder,
  deleteOrder,
  fetchOrders,
  updateOrder,
} from "@/redux/ordersSlice";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function OrderScreen() {
  const { id } = useLocalSearchParams();
  const [addText, setAddText] = useState("");
  console.log(id);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  //   fetch orders
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const ordersFilter = orders.filter((item) => item.userId === id);

  //   add
  const handleAddOrder = () => {
    const numberAdd = Number(addText);
    dispatch(
      addOrder({ userId: id, tongTien: numberAdd, trangThai: "trangThai" })
    );
    setAddText("");
  };

  //   delete
  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    console.log(id);
  };

  //   update
  const [updateText, setUpdateText] = useState("");
  const [updateIndexInp, setUpdateIndex] = useState("");
  const handleUpdate = (id) => {
    dispatch(
      updateOrder({
        id: id,
        tongTien: updateText,
        trangThai: "updated trangThai",
      })
    );
    setUpdateIndex("");
    setUpdateText("");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{ borderWidth: 1 }}
          value={addText}
          onChangeText={setAddText}
        />
        <Pressable
          style={{ backgroundColor: "green", padding: 20 }}
          onPress={handleAddOrder}
        >
          <Text>Add</Text>
        </Pressable>
      </View>

      <FlatList
        style={{ flexDirection: "row", marginTop: 20 }}
        data={ordersFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: "black",
              marginBottom: 20,
            }}
          >
            <Pressable
              style={{ flex: 1, width: "200px" }}
              onPress={() => {
                console.log(item.id);
              }}
            >
              <Text>{item.tongTien}</Text>
              <Text>{item.trangThai}</Text>
            </Pressable>

            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{ backgroundColor: "yellow", padding: 20 }}
                onPress={() => {
                    if(updateIndexInp != item.id){
                        setUpdateIndex(item.id)
                    }else{
                        setUpdateIndex("")
                    }
                }}
              >
                <Text>Update</Text>
              </Pressable>
              <Pressable
                style={{ backgroundColor: "red", padding: 20 }}
                onPress={() => {
                  handleDelete(item.id);
                }}
              >
                <Text>Delete</Text>
              </Pressable>
            </View>

            {updateIndexInp === item.id && (
              <View>
                <TextInput
                  style={{ borderWidth: 1 }}
                  value={updateText}
                  onChangeText={setUpdateText}
                />
                <Pressable
                  style={{ backgroundColor: "grey", padding: 20 }}
                  onPress={()=>{handleUpdate(item.id)}}
                >
                  <Text>Save</Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
