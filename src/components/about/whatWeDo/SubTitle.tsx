import { SubTitleSection } from "../../../styles/about/whatWeDo";
import { Image, Text } from "../../common";
import WhatWeDoImage3 from "../../../assets/what_we_do_image3.png";
import WhatWeDoImage4 from "../../../assets/what_we_do_img4.png";
import { useScrollY } from "../../../hooks/useScrollY";
const Fade = require("react-reveal/Fade");

const SubTitle = () => {
  const scrollY = useScrollY();
  console.log(scrollY);
  return (
    <SubTitleSection scrollY={scrollY}>
      <div className="content">
        <Text size="xlarge" lineheight="34.42px">
          다양한 개발 관련 프로그램을 경험하면서 부원들은 <br />
          각기 다른 개발 역량, 지식, 경험을 쌓을 수 있고, <br />
          좋은 개발자에 한 걸음씩 더 가까워집니다.
        </Text>
      </div>
      <div className="image3">
        <Image src={WhatWeDoImage3} alt="whatwedoimg3" width="49.3vw" />
      </div>
      <div className="image4">
        <Image src={WhatWeDoImage4} alt="whatwedoimg4" width="28.3vw" />
      </div>
      <div className="nlText">
        <span className="firstText">Network Leader</span>
        <div className="symbol"></div>
        <p className="secondText">Program</p>
      </div>
    </SubTitleSection>
  );
};

export default SubTitle;
