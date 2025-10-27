import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Product Home Page with sql lite</Text>
      <Link href={"/cart"}>Go to cart</Link>
    </View>
  );
}
