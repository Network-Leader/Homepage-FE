import { MainWEAContainer } from "../../../styles/mainpage/whoWeAreSection";
import { Image, Text } from "../../common";
import BG from "../../../assets/main_who_we_are_bg.png";
import BG_blur from "../../../assets/main_who_we_are_bg_blur.png";
import Item1 from "../../../assets/main_who_we_are1.png";
import Item2 from "../../../assets/main_who_we_are2.png";
import Item3 from "../../../assets/main_who_we_are3.png";

const whoWeAreItem = [
  {
    id: 1,
    src: Item1,
    subTitle: "주체적 배움",
    subDes:
      "개인과 공동체의 성장을 위해\n 스스로 목표를 설정하고\n 적극적이고 자발적으로\n 배우려는 자세를 지향합니다.",
  },
  {
    id: 2,
    src: Item2,
    subTitle: "지속적 나눔",
    subDes:
      "각자가 가진 능력은 어느\n누구에게 받은 것이기에 내가\n받은 가치를 나눔으로써\n공동체는 더욱 발전합니다.",
  },
  {
    id: 3,
    src: Item3,
    subTitle: "생각의 존중",
    subDes:
      "서로의 생각을 이해하기 위해\n노력하며 함께 발전 방향을\n모색하는 태도를 지향합니다.",
  },
];

const MainWhoWeAreSection = () => {
  return (
    <MainWEAContainer>
      <div className="titleImg">
        <Image src={BG} alt="bg" width="100vw" />
      </div>
      <div className="titleImgBlur">
        <Image src={BG_blur} alt="bg_blur" width="106vw" />
      </div>
      <div className="title">
        <Text size="h1" weight="bold" color="white">
          Who We Are
        </Text>
      </div>
      <div className="content">
        {/* <div className="item1">
          <Image src={Item1} alt="item1" />
        </div>
        <div className="item2">
          <Image src={Item2} alt="item2" />
        </div>
        <div className="item3">
          <Image src={Item3} alt="item3" />
        </div> */}
        {whoWeAreItem.map((item) => (
          <div className="item">
            <Image src={item.src} alt="item" />
            <div className="subTitle">
              <Text size="h3" weight="medium" color="white">
                {item.subTitle}
              </Text>
            </div>
            <div className="subDes">
              <Text
                size="xlarge"
                weight="regular"
                color="white"
                lineheight="31.18px"
              >
                {item.subDes}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </MainWEAContainer>
  );
};

export default MainWhoWeAreSection;
