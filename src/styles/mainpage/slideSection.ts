import styled from "@emotion/styled";

export const SlideWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 800px;
  margin-top: 100px;
  margin-bottom: 213px;
  background-color: white;
`;

export const ImgBox = styled.div<{ title: string; content: string }>`
  position: relative;
  background-image: ${(props) => props.content};
`;

export const TitleBox = styled.div`
  position: absolute;
  top: 80%;
  left: 5%;
  width: 30%;
`;
