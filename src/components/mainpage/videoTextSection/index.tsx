import {
  VideoContainer,
  VideoBox,
  VideoIframe,
} from "../../../styles/mainpage/videoTextSection";
import FirstScrollText from "./FirstScrollText";
import SecondScrollText from "./SecondScrollText";
import { useScrollY } from "../../../hooks/useScrollY";
import ThirdScrollText from "./ThirdScrollText";

export interface ScrollYType {
  scrollY: number;
}

const VideoTextSection = () => {
  const scrollY = useScrollY();
  const src = `https://www.youtube.com/embed/ttc8Q39E0zI?&autoplay=1&showinfo=0&mute=1&loop=1&playlist=ttc8Q39E0zI&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3&showinfo=1&start=30`;
  return (
    <VideoContainer>
      <VideoBox scrollY={scrollY}>
        <VideoIframe src={src} />
        <FirstScrollText scrollY={scrollY} />
        <SecondScrollText scrollY={scrollY} />
        <ThirdScrollText scrollY={scrollY} />
      </VideoBox>
    </VideoContainer>
  );
};

export default VideoTextSection;
