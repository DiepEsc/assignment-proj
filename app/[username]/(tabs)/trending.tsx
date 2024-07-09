import { Text } from "react-native";
import React from "react";
import TiktokStyleVideoList from "@/components/TiktokStyleVideoList";
import { selectListTrendingVideos } from "@/redux/slices/videoSlice";
import { useAppSelector } from "@/hooks/redux";
export default function Trending() {
  const videos: VideoModel[] = useAppSelector(selectListTrendingVideos);
  return (
    <TiktokStyleVideoList videos={videos} />
  );
}