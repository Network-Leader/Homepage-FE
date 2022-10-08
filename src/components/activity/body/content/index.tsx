import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { ContentProps } from "..";
import { Text } from "../../../common";

const ContentContainer = styled.div<{ thumbnail: string }>`
  width: 305.43px;
  height: 373.72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px;
  background-color: #949494;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
  &::before {
    content: "";
    background-image: url(${({ thumbnail }) => thumbnail});
    background-size: cover;
    opacity: 0.5;
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
  activity: { title, generation, leader, thumbnail },
}: {
  activity: ContentProps;
}) => {
  const nav = useNavigate();
  return (
    <ContentContainer
      thumbnail={thumbnail}
      onClick={() => {
        nav(`${title}`);
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
