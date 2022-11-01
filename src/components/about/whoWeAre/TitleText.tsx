import { TitleTextSection } from "../../../styles/about/whoWeAre";
import { Image, Text } from "../../common";
import SecondImage from "../../../assets/about_second_image.png";
import aboutImage1 from "../../../assets/about_image1.png";
import aboutImage2 from "../../../assets/about_image2.png";

const TitleText = () => {
  return (
    <TitleTextSection>
      <div className="titleBox">
        <Text size="h1" weight="bold">
          Who We Are
        </Text>
      </div>
      <div className="subTitleBox">
        <Text size="xlarge" lineheight="34.42px">
          NL은 서울과학기술대학교 컴퓨터공학 소속 학술동아리로 알고리즘과 개발에
          관심이 많은
          <br />
          학부생들이 모여 프로젝트와 스터디를 진행하는 동아리입니다. NL은
          Network Leader의
          <br />
          줄임말로, 전 세계로 뻗어나가는 리더형 인재로 거듭나는 의미를 가지고
          있습니다.
        </Text>
      </div>
      <div className="secImageBox">
        <Image
          src={SecondImage}
          alt="Second Image"
          width="calc(100vw - 208px)"
          display="block"
        />
      </div>
      <div className="imageOneBox">
        <Image src={aboutImage1} alt="image1" width="calc(100vw * 0.12)" />
        <Text size="xlarge" lineheight="34.42px">
          NL은 자율적인 참여로 여러 활동을 진행하고 있습니다. <br />
          스터디나 클래스, 각종 행사, 홍보 등의 활동은 자발적인
          <br />
          참여로 이루어지고, 스스로 활동 방향과 목표를 설정합니다.
        </Text>
      </div>
      <div className="imageTwoBox">
        <div className="imageTwoTextBox">
          <div className="firstText">
            <Text size="xlarge" lineheight="34.42px">
              1990년대부터 현재까지 NL의 선배 부원들은
              <br />
              네이버, 라인, 카카오, 쿠팡을 비롯해 <br />
              실리콘밸리 스타트업 등 다양한 개발 분야에서 <br />
              두각을 보이고 있습니다.
            </Text>
          </div>
          <Text size="xlarge" lineheight="34.42px">
            약 40여 명으로 구성된 현 부원들은 <br />
            개발, 알고리즘 대회 등 다양한 부문에서 <br />
            활발한 활동을 이어나가고 있습니다.
          </Text>
        </div>
        <Image src={aboutImage2} alt="image2" width="calc(100vw * 0.41)" />
      </div>
    </TitleTextSection>
  );
};
export default TitleText;
