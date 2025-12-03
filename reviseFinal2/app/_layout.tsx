import { Stack } from "expo-router";
import {store} from '../redux/store';
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{title: "User page"}}/>
        <Stack.Screen name="order/[id]" options={{title: "Order page"}}/>
      </Stack>
    </Provider>
  )
}
