import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://692d3c42e5f67cd80a4aa90c.mockapi.io/users"
      );
      if (res.data) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>List of users</Text>
      <ScrollView>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={()=> router.push(`/todo/${item.id}`)}
            >
              <View style={{ marginTop: 10 }}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>
    </View>
  );
}
