import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from '../redux/store'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "User List" }} />
        <Stack.Screen name="user/[id]" options={{ title: "My Todos" }} />
      </Stack>
    </Provider>
  );
}