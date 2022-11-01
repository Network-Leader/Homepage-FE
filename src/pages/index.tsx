import VideoTextSection from "../components/mainpage/videoTextSection";
import SlideSection from "../components/mainpage/slideSection";
import ApplicationSection from "../components/mainpage/applicationSection";
import MainWhatWeDoSection from "../components/mainpage/whatWeDoSection";
import MainWhoWeAreSection from "../components/mainpage/whoWeAreSection";

const MainPage = () => {
  return (
    <>
      <div style={{ height: "7000px" }}>
        <VideoTextSection />
      </div>
      <SlideSection />
      <MainWhoWeAreSection />
      <MainWhatWeDoSection />
      <ApplicationSection />
    </>
  );
};

export default MainPage;
