import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { ContentProps } from "..";
import { Text } from "../../../common";
import class1 from "../../../../assets/activity/defaultImg/class-1.png";
import class2 from "../../../../assets/activity/defaultImg/class-2.png";
import class3 from "../../../../assets/activity/defaultImg/class-3.png";
import class4 from "../../../../assets/activity/defaultImg/class-4.png";
import study1 from "../../../../assets/activity/defaultImg/study-1.png";
import study2 from "../../../../assets/activity/defaultImg/study-2.png";
import study3 from "../../../../assets/activity/defaultImg/study-3.png";
import study4 from "../../../../assets/activity/defaultImg/study-4.png";
import se1 from "../../../../assets/activity/defaultImg/se-1.png";
import se2 from "../../../../assets/activity/defaultImg/se-2.png";
import se3 from "../../../../assets/activity/defaultImg/se-3.png";
import se4 from "../../../../assets/activity/defaultImg/se-4.png";
import { keyframes } from "@emotion/react";

const defaultImgs = {
  클래스: [class1, class2, class3, class4],
  스터디: [study1, study2, study3, study4],
  특강: [se1, se2, se3, se4],
};

const ContentContainer = styled.div<{
  thumbnail: string | null;
  color: string;
  randomImg: string;
}>`
  animation: ${keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      }`} 0.2s linear;
  width: 305.43px;
  height: 373.72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px;
  overflow: hidden;
  background-color: ${({ color }) => color};
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
  &::before {
    content: "";
    background-image: url(${({ thumbnail, randomImg }) =>
      !thumbnail ? randomImg : thumbnail});
    background-size: cover;
    opacity: ${({ thumbnail }) => (thumbnail === null ? "1" : "0.5")};
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .top {
    display: flex;
    flex-direction: column;
    position: relative;
    .generation {
      width: 35px;
      font-size: ${({ theme }) => theme.font.size.medium}px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      background-color: ${({ theme }) => theme.background.white};
      padding: 5px 0;
      margin: 10px 0 0 0;
    }
  }
  .bottom {
    position: relative;
  }
`;

const Content = ({
  activity: { title, generation, leader, thumbnail, classification },
}: {
  activity: ContentProps;
}) => {
  const nav = useNavigate();
  const color =
    classification === "스터디"
      ? "#8EA1FF"
      : classification === "클래스"
      ? "#FFC466"
      : classification === "특강"
      ? "#D5A0FF"
      : "#000000";
  const randomImg = defaultImgs[classification][Math.floor(Math.random() * 4)];
  return (
    <ContentContainer
      color={color}
      thumbnail={thumbnail}
      randomImg={randomImg}
      onClick={() => {
        nav(title);
      }}
    >
      <div className="top">
        <Text size="xxlarge" weight="regular">
          {title}
        </Text>
        <span className="generation">{generation}기</span>
      </div>
      <div className="bottom">
        <Text size="medium">{leader}</Text>
      </div>
    </ContentContainer>
  );
};

export default Content;
