import styled from "@emotion/styled";

export const VideoContainer = styled.section`
  width: 100vw;
  height: 6000px;
  margin-top: 105px;
  position: relative;
`;

export const VideoBox = styled.div<{ scrollY: number }>`
  width: 100vw;
  height: calc(100vh - 105px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  opacity: ${(props) => props.scrollY > 6000 && 0};
  transition: 0.6s;
`;
export const VideoIframe = styled.iframe`
  width: 100%;
  height: max(100%, calc(100vw / 16 * 9));
`;

export const FirstTextBox = styled.div<{ scrollY: number }>`
  position: fixed;
  opacity: ${(props) => props.scrollY > 2000 && 0};
  transition: 0.8s;
  text-align: center;
  transform: ${(props) => props.scrollY > 1000 && "translateY(-80px)"};
`;

export const SecondTextBox = styled.div<{ scrollY: number }>`
  position: fixed;
  opacity: 0;
  margin-top: 230px;
  opacity: ${(props) => props.scrollY > 1000 && props.scrollY < 2000 && 1};
  transition: 0.8s;
  text-align: center;
`;
export const ThirdTextBox = styled.div<{ scrollY: number }>`
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 65%;
  .text1 {
    opacity: 0;
    opacity: ${(props) => props.scrollY > 3000 && props.scrollY < 5400 && 1};
    transition: 0.6s;
    flex-grow: 1;
  }
  .text2 {
    opacity: 0;
    opacity: ${(props) => props.scrollY > 3900 && props.scrollY < 5400 && 1};
    transition: 0.6s;
    flex-grow: 1;
  }
  .text3 {
    opacity: 0;
    opacity: ${(props) => props.scrollY > 4800 && props.scrollY < 5400 && 1};
    transition: 0.6s;
    flex-grow: 1;
  }
`;
