import { Button, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import TransparentButton from "./TransparentButton";

export type VideoAction = "add" | "edit" | "share";

export default function VideoOptions(props: { containerStyle?: StyleProp<ViewStyle>, onAction?: (action: VideoAction) => void }) {
  return (
    <View style={[, props.containerStyle]}>

      <TransparentButton
        style={[styles.button, { backgroundColor: '#cff7' }]}
        onPress={() => props.onAction?.("add")}
      >
        <Text style={styles.buttonText}>+</Text>
      </TransparentButton>
      <TransparentButton
        style={[styles.button, { backgroundColor: '#f467' }]}
        onPress={() => props.onAction?.("edit")}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TransparentButton>
      <TransparentButton
        style={[styles.button, { backgroundColor: '#ff67' }]}
        onPress={() => props.onAction?.("share")}
      >
        <Text style={styles.buttonText}>Share</Text>
      </TransparentButton>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  button: {
    width: 80,
    margin: 4,
    borderColor: '#0004',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
})  