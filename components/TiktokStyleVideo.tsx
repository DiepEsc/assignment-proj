import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video } from "expo-av";

export default function TiktokStyleVideo({ video, shouldPlay }: { video: VideoModel, shouldPlay?: boolean }) {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.url }}
        isLooping style={styles.video}
        shouldPlay={shouldPlay}
      />
      <Text style={styles.title}>{video.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    zIndex: 10,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    color: 'white',
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    start: 0,
  },
});