import { Image, Text } from "../../common";
import whatWeDoTitleImage from "../../../assets/what_we_do_top_image.png";
import whatWeDotitleImage2 from "../../../assets/what_we_do_image2.png";
import { WhatWeDoTitleSection } from "../../../styles/about/whatWeDo";

const Title = () => {
  return (
    <WhatWeDoTitleSection>
      <div className="titleImage">
        <Image src={whatWeDoTitleImage} alt="whatWeDoTitle" width="100vw" />
      </div>
      <div className="titleImage2">
        <Image src={whatWeDotitleImage2} alt="whatWeDoTitle2" width="100vw" />
      </div>

      <div className="whatWeDoTitle">
        <Text size="h1" weight="bold" color="white">
          What We Do
        </Text>
      </div>
      <div className="whatWeDoContent">
        <Text size="xlarge" weight="medium" lineheight="34.42px" color="white">
          NL은 개발자의 성장을 돕는 다양한 프로그램을 운영합니다. 클래스
          진행자로부터 운영되는 <br />
          여러 개발, 알고리즘 클래스와 관심사를 공유하는 부원들끼리 모여서
          성장하는 스터디 외에도 <br />
          NL Company 프로젝트를 통한 실제 IT기업이 개발하는 방법으로 실무 개발
          경험을 쌓고 <br />
          디자인팀과의 협업까지 진행할 수 있습니다. 또한 스스로 활동 방향과
          목표를 설정하고 <br />
          자발적으로 참여하는 여러 활동을 통해 주도적인 참여나 계획을 세우는
          경험을 쌓을 수 있습니다.
        </Text>
      </div>
    </WhatWeDoTitleSection>
  );
};

export default Title;
