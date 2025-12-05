import { Stack } from "expo-router";
import {Provider} from 'react-redux'
import {store} from '../redux/store'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{title: "User Home"}}/>
        <Stack.Screen name="todo/[id]" options={{title: "Todo Home"}}/>
      </Stack>
    </Provider>
  );
}
