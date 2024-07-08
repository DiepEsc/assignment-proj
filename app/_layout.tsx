import { store } from "@/redux/store";
import { Slot, Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot/>
    </Provider>
  );
}
