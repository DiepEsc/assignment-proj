import VideoForm from "@/components/VideoForm";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { actions, selectVideosState } from "@/redux/slices/videoSlice";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Edit() {
  const {id, list } = useLocalSearchParams();
  const listString = list as 'new' | 'trending';
  const state = useAppSelector(selectVideosState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  let videos: VideoModel[];
  if(listString == 'new') {
    videos = state.newVideos;
  } else {
    videos = state.trendingVideos;
  }
  const video = videos.find((element) => element.id === id)


  const saveVideo = async (video: VideoModel, list: 'new' | 'trending') => {
    dispatch(actions.updateVideo({ video, list }));
    // TODO: wait for the action to finish before navigating
    // navigate to the list
    router.navigate(`../${list}`);
  }

  return (
    <VideoForm video={video} list={listString} submitButtonText="Save" onSubmit={saveVideo}/>
  )
}