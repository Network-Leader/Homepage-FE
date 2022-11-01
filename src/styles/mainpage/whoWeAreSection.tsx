import styled from "@emotion/styled";

export const MainWEAContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  height: calc(100vw / 1440 * 960);
  margin-bottom: 256px;
  .titleImg {
    position: absolute;
    top: 0;
  }
  .titleImgBlur {
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .title {
    z-index: 2;
  }
  .content {
    display: flex;
    flex-direction: row;
    z-index: 2;
    gap: 140px;
    .item {
      width: 230px;
      margin: 0 auto;
      text-align: center;
      .subTitle {
        margin: 53px 0 24px 0;
      }
      .subDes {
        white-space: pre-line;
      }
    }
  }
`;
