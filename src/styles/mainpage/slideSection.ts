import styled from "@emotion/styled";
import theme from "../../theme/theme";

export const SlideWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 800px;
  margin-top: 100px;
  background-color: orange;
`;

export const ImgBox = styled.div<{ title: string; content: string }>`
  position: relative;
  background-image: ${(props) => props.content};
`;

export const SlideElement = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 325px;
  background-size: cover;
`;

export const NextElement = styled.div`
  border-radius: 10px;
  width: 50%;
  height: 325px;
  background-size: cover;
`;
