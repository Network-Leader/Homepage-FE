import Programs from "./Programs";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Project from "./project";

const WhatWeDoSection = () => {
  return (
    <>
      <Title />
      <SubTitle />
      <Programs />
      <Project page="about" />
    </>
  );
};

export default WhatWeDoSection;
