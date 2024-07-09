
import TiktokStyleVideoList from "@/components/TiktokStyleVideoList";
import type { VideoAction } from "@/components/VideoOptions";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { actions, selectListNewVideos } from "@/redux/slices/videoSlice";
import { useRouter } from "expo-router";
import React from "react";


export default function New() {
  
   const videos: VideoModel[] = useAppSelector(selectListNewVideos);
   const dispatch = useAppDispatch();
   const router = useRouter();

   const onVideoAction = (action: VideoAction, currenPosition: number) => {  

    switch(action) {
      case "add":
        // navigate to create video page route, passing 'new' as the list param
        router.push('../create?list=new');
        break;
      case "edit":
        router.push({ pathname: '../video/[id]', params: { id: videos[currenPosition].id, list: 'new' } })
        break;
      case "share":
        break;
    }
   }

  return (
    <TiktokStyleVideoList videos={videos} onAction={onVideoAction} />

  );
}
