import styled from "@emotion/styled";

export const TitleTextSection = styled.section`
  margin: 105px 0 371px 0;
  text-align: center;
  width: 100vw;
  .titleBox {
    margin-bottom: 63px;
  }
  .subTitleBox {
    margin-bottom: 195px;
  }
  .secImageBox {
    margin-bottom: 190px;
  }
  .imageOneBox {
    display: flex;
    gap: 22px;
    margin-left: 41%;
    align-items: center;
    text-align: left;
    margin-bottom: 266px;
  }
  .imageTwoBox {
    display: flex;
    gap: 89px;
    text-align: left;
    margin-left: 14.7%;
    .imageTwoTextBox {
      .firstText {
        margin-bottom: 15px;
      }
    }
  }
`;

export const CoreValueSection = styled.section<{ isSelectValue: string }>`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  .coreValueImageBox {
    position: relative;
    .image1 {
      opacity: ${(props) => (props.isSelectValue === "value1" ? 1 : 0)};
      transition: 0.6s;
    }
    .image2 {
      position: absolute;
      top: 0;
      left: 0;
      opacity: ${(props) => (props.isSelectValue === "value2" ? 1 : 0)};
      transition: 0.6s;
    }
    .image3 {
      position: absolute;
      top: 0;
      left: 0;
      opacity: ${(props) => (props.isSelectValue === "value3" ? 1 : 0)};
      transition: 0.6s;
    }
  }
  .coreValueContentBox {
    width: 100%;
    min-height: 100%;
    padding: 30px 0 0 40px;
  }
`;

export const CoreValueContentBox = styled.div<{ isSelectValue: string }>`
  margin-bottom: 420px;
  .coreValueTitle1Box {
    border-bottom: ${(props) =>
      props.isSelectValue === "value1" && "1px solid black"};
    padding-bottom: ${(props) => props.isSelectValue === "value1" && "35px"};
    margin-bottom: 45px;
    .coreValueTitle {
      cursor: pointer;
      transition: color 0.6s;
      margin-bottom: 0;
      transition: margin 0.6s;
      margin-bottom: ${(props) => props.isSelectValue === "value1" && "54px"};
    }
    .coreValueContent {
      height: 120px;
      height: ${(props) => props.isSelectValue !== "value1" && 0};
      overflow: hidden;
      transition: 0.4s;
    }
  }
  .coreValueTitle2Box {
    border-bottom: ${(props) =>
      props.isSelectValue === "value2" && "1px solid black"};
    padding-bottom: ${(props) => props.isSelectValue === "value2" && "35px"};
    margin-bottom: 45px;
    .coreValueTitle {
      cursor: pointer;
      margin-bottom: 0;
      transition: margin 0.6s;
      margin-bottom: ${(props) => props.isSelectValue === "value2" && "54px"};
    }
    .coreValueContent {
      height: 120px;
      height: ${(props) => props.isSelectValue !== "value2" && 0};
      overflow: hidden;
      transition: 0.4s;
    }
  }
  .coreValueTitle3Box {
    padding-bottom: ${(props) => props.isSelectValue === "value3" && "35px"};
    margin-bottom: 45px;
    .coreValueTitle {
      cursor: pointer;
      margin-bottom: 0;
      transition: margin 0.6s;
      margin-bottom: ${(props) => props.isSelectValue === "value3" && "54px"};
    }
    .coreValueContent {
      height: 120px;
      height: ${(props) => props.isSelectValue !== "value3" && 0};
      overflow: hidden;
      transition: 0.4s;
    }
  }
`;
