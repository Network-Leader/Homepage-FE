import styled from "@emotion/styled";

export const HowWeAffectTitle = styled.section`
  position: relative;
  margin-bottom: 265px;
`;

export const TitleBgSection = styled.div<{ scrollY: number }>`
  position: relative;
  height: calc(100vw / 1440 * 960);
  display: flex;
  justify-content: center;
  align-items: center;
  .titleImage {
    position: absolute;
    top: 0;
    left: 0;
  }
  .blur {
    position: absolute;
    top: 0;
    left: 0;
  }
  .text {
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 92px;
    .title {
      z-index: 2;
      text-align: center;
    }
    .description {
      z-index: 2;
      text-align: center;
    }
  }
`;

export const SecondTitleBgSection = styled.div<{ scrollY: number }>`
  position: relative;
  height: calc(100vw / 1440 * 960);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .titleImage {
    position: absolute;
    top: 0;
    left: 0;
  }
  .blur {
    position: absolute;
    top: 0;
    left: 0;
  }
  .performance {
    z-index: 3;
  }
  .perfText {
    position: absolute;
    top: 38%;
    z-index: 4;
  }
`;

export const BlogNewsSection = styled.section`
  width: 1018px;
  margin: 0 auto 328px;
  .title {
    text-align: center;
    margin-bottom: 77px;
  }
  .contentBox {
    display: flex;
    gap: 26px;
    .description {
      margin: 42px 0 51px;
    }
    .subtitle {
      margin-bottom: 15px;
    }
  }
`;
