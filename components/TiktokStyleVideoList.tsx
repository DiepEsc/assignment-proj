import React, { useCallback, useRef, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, View } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import TiktokStyleVideo from "./TiktokStyleVideo";
import VideoOptions, { VideoAction } from "./VideoOptions";

export default function TiktokStyleVideoList({ videos, onAction }: { videos: VideoModel[], onAction?: (action: VideoAction, currenPosition: number) => void }) {

  const [currenPosition, setCurrentPosition] = useState(0);
  const onActionCallback = useCallback((action: VideoAction) => {
      onAction?.(action, currenPosition)
    },
    [onAction, currenPosition]
  )

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
      </PagerView>
      <VideoOptions
        containerStyle={{ position: 'absolute', bottom: 0, end: 0 }}
        onAction={onActionCallback}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
