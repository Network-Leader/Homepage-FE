import React from "react";
import SlideSection from "../components/mainpage/slideSection";
import VideoTextSection from "../components/mainpage/videoTextSection";

const MainPage = () => {
  return (
    <>
      <div style={{ height: "8000px" }}>
        <VideoTextSection />
      </div>
      <SlideSection />
    </>
  );
};

export default MainPage;
