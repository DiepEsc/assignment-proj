import VideoForm from "@/components/VideoForm";
import { useAppDispatch } from "@/hooks/redux";
import { actions } from "@/redux/slices/videoSlice";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Create() {
  const { list } = useLocalSearchParams();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const listProp = list as 'new' | 'trending';
  function addVideo(video: VideoModel, list: "new" | "trending"): void | Promise<void> {
    dispatch(actions.addVideo({ video, list }));
    // TODO: wait for the action to finish before navigating
    // navigate to the list
    router.back();
  }

  return (
    <VideoForm list={listProp} submitButtonText="Create" onSubmit={addVideo}/>
  )
}