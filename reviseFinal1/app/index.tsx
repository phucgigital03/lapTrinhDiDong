import { router } from 'expo-router';
import { View, Text, Pressable, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

// Define minimal User type
interface User { id: string; name: string; }

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://692d3c42e5f67cd80a4aa90c.mockapi.io/users')
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        return setUsers(data)
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => router.push(`/user/${item.id}`)}
            style={{ padding: 20, borderBottomWidth: 1 }}
          >
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}