import React, { useRef, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, View } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import TiktokStyleVideo from "./TiktokStyleVideo";

export default function TiktokStyleVideoList({ videos }: { videos: VideoModel[] }) {

  const [currenPosition, setCurrentPosition] = useState(0);

  function handlePageSelected(event: PagerViewOnPageSelectedEvent): void | Promise<void> {
    const position = event.nativeEvent.position;
    setCurrentPosition(position);
  }

  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={currenPosition} orientation={'vertical'} onPageSelected={handlePageSelected} >
        {
          videos.map((video, index) => {
            return (
              <TiktokStyleVideo key={index} video={video} shouldPlay={currenPosition === index} />
            )
          })
        }
      </PagerView></View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
