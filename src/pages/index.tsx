import React from "react";
import VideoTextSection from "../components/mainpage/videoTextSection";
import SlideSection from "../components/mainpage/slideSection";
import ApplicationSection from "../components/mainpage/applicationSection";

const MainPage = () => {
  return (
    <>
      <div style={{ height: "8000px" }}>
        <VideoTextSection />
      </div>
      <SlideSection />
      <ApplicationSection />
    </>
  );
};

export default MainPage;
