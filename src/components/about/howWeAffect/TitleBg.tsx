import {
  HowWeAffectTitle,
  SecondTitleBgSection,
  TitleBgSection,
} from "../../../styles/about/howWeAffect";
import { Image, Text } from "../../common";
import TitleImage from "../../../assets/how_we_affect_title.png";
import TitleImageBlur from "../../../assets/how_we_affect_title_blur.png";
import SecondTitleImage from "../../../assets/how_we_affect4.png";
import SecondTitleImageBlur from "../../../assets/how_we_affect3.png";
import PerfImg1 from "../../../assets/performance1.png";
import PerfImg2 from "../../../assets/performance2.png";
import PerfImg3 from "../../../assets/performance3.png";
import { useScrollY } from "../../../hooks/useScrollY";

const TitleBg = () => {
  const scrollY = useScrollY();
  console.log(scrollY);
  return (
    <>
      <HowWeAffectTitle>
        <TitleBgSection scrollY={scrollY}>
          <div className="titleImage">
            <Image src={TitleImage} alt="titleimage" width="100vw" />
          </div>
          <div className="blur">
            <Image src={TitleImageBlur} alt="titleimageblur" width="100vw" />
          </div>
          <div className="text">
            <div className="title">
              <Text size="h1" weight="bold" color="white">
                How We Affect
              </Text>
            </div>
            <div className="description">
              <Text size="xlarge" lineheight="34.42px" color="white">
                NL 부원들은 '열정'과 '협업'을 통해 좋은 개발자로 성장합니다.
                <br />
                '네카라'를 비롯해 다양한 개발 분야에서 왕성히 활동하는 선배
                부원들이 그 증거입니다.
                <br />타 분야 전공자들과 자유로운 교류, 자율적인 운영, 열정적인
                협업 경험은
                <br />
                졸업 후에도 사회에서 차별화된 역량을 펼칠 수 있게 하는 자양분이
                됩니다.
              </Text>
            </div>
          </div>
        </TitleBgSection>

        <SecondTitleBgSection scrollY={scrollY}>
          <div className="titleImage">
            <Image src={SecondTitleImage} alt="titleimage" width="100vw" />
          </div>
          <div className="blur">
            <Image
              src={SecondTitleImageBlur}
              alt="titleimageblur"
              width="100vw"
            />
          </div>
          <div className="performance">
            <Image src={PerfImg1} alt="performance" />
          </div>
          <div className="performance">
            <Image src={PerfImg2} alt="performance" />
          </div>
          <div className="performance">
            <Image src={PerfImg3} alt="performance" />
          </div>
          <div className="perfText">
            <Text size="h1" color="white" weight="bold">
              Performance
            </Text>
          </div>
        </SecondTitleBgSection>
      </HowWeAffectTitle>
    </>
  );
};
export default TitleBg;
