import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetail() {
    const {id} = useLocalSearchParams();
    console.log(id)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Product detail page</Text>
    </View>
  );
}
