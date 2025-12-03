import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function Index() {
  const [usersList,setUsersList] = useState([]);
  const fetchUser = async ()=>{
      try {
        const res = await fetch('https://692d3c42e5f67cd80a4aa90c.mockapi.io/users');
        const result = await res.json();
        setUsersList(result)
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{flexDirection: 'row', marginTop: 20}}
        data={usersList}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> (
            <Pressable style={{flex: 1, width: '200px', marginBottom: 20, borderBottomWidth: 1}} onPress={()=> router.push(`/order/${item.id}`)}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.address}</Text>
            </Pressable>
        )}
      />
    </View>
  );
}
