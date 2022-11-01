import { Image } from "../common";

import TopImageRoute from "../../assets/about_top_image.png";
import WhoWeAreSection from "./whoWeAre";
import WhatWeDoSection from "./whatWeDo";
import HowWeAffectSection from "./howWeAffect";
const About = () => {
  return (
    <>
      <Image src={TopImageRoute} alt="TopImage" width="100vw" />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <HowWeAffectSection />
    </>
  );
};

export default About;
