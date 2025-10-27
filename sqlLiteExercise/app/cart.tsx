import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Cart(){
    return (
        <View style={{}}>
            <View>
                <Text>Cart page</Text>
                <Link href={"/invoice"}>Go to invoice</Link>
            </View>
        </View>
    )
}
