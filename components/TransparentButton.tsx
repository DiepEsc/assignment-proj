import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";

type TransparentButtonProps = {
  style: StyleProp<ViewStyle>,
  onPress?: () => void,
  children?: React.ReactNode
}

export default function TransparentButton(props: TransparentButtonProps) {
  return (
    <GestureHandlerRootView style={[styles.container, props.style]}>
      <RectButton style={[styles.button]} onPress={props.onPress} >
        {props.children}
      </RectButton>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'blue',
  },
})