import styled from "@emotion/styled";

export const WhatWeDoTitleSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vw / 1440 * 960);
  margin-bottom: 256px;
  gap: 92px;
  .titleImage {
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .titleImage2 {
    position: absolute;
    top: 0;
  }
  .whatWeDoTitle {
    z-index: 2;
  }
  .whatWeDoContent {
    text-align: center;
    z-index: 2;
  }
`;

export const SubTitleSection = styled.section<{ scrollY: number }>`
  position: relative;
  width: 100vw;
  height: 46.2vw;
  margin-bottom: 335px;
  overflow: hidden;
  .content {
    position: absolute;
    left: 14.6%;
    top: 3.6%;
  }
  .image3 {
    position: absolute;
    right: 0;
  }
  .image4 {
    position: absolute;
    left: 17.3%;
    top: 49%;
  }
  .nlText {
    display: flex;
    position: absolute;
    right: -1.1vw;
    bottom: 0.8vw;

    .firstText {
      color: black;
      font-size: 6.8vw;
      font-weight: 500;
      mix-blend-mode: difference;
    }
    .symbol {
      width: 5.7vw;
      height: 5.7vw;
      background-color: lightgray;
      margin: 10px 1.7vw 0 1.1vw;
    }
    .secondText {
      font-size: 6.8vw;
      font-weight: 500;
    }
  }
`;

export const ProgramsSection = styled.section`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: 450px;
  .title {
    margin-bottom: 40px;
  }
  .contentBox {
    display: flex;
    gap: 20px;
    .content1 {
      border-top: 1px solid black;
      width: 328px;
      padding-top: 34px;
    }
    .content2 {
      border-top: 1px solid black;
      width: 328px;
      padding-top: 34px;
    }
    .content3 {
      border-top: 1px solid black;
      width: 328px;
      padding-top: 34px;
    }
  }
`;

export const ProjectSection = styled.section`
  width: 1075px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin-bottom: 80px;
  }
  .contentBox {
    display: flex;
    gap: 60px;
    .contentTitle {
      margin-top: 34px;
      margin-bottom: 44px;
    }
    .contentDescription {
      margin-bottom: 52px;
    }
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .tag {
    position: relative;
    &:hover {
      background-color: #4a38f4;
      color: white;
      .tagDetail {
        display: block;
      }
    }
  }
  .tagDetail {
    z-index: 3;
    position: absolute;
    top: 10px;
    left: 80px;
    background-color: rgba(255, 255, 255, 0.77);
    display: none;
    width: 295px;
    border-radius: 10px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    height: 82px;
    .eclipse {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.background.blue};
      display: inline-block;
      position: absolute;
      top: 16px;
      left: 17px;
    }
    .title {
      color: #828282;
      font-size: 12px;
      font-weight: 700;
      position: absolute;
      top: 20px;
      left: 23px;
    }
    .des {
      position: absolute;
      top: 43px;
      left: 23px;
    }
  }
`;
