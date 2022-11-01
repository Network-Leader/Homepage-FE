import { useState } from "react";
import { CoreValueContentBox } from "../../../../styles/about/whoWeAre";
import { Text } from "../../../common";

interface CoreValueType {
  isSelectValue: string;
  setIsSelectValue: (v: string) => void;
}

const Content = ({ isSelectValue, setIsSelectValue }: CoreValueType) => {
  return (
    <CoreValueContentBox isSelectValue={isSelectValue}>
      <div className="coreValueTitle1Box">
        <div
          className="coreValueTitle"
          onClick={() => setIsSelectValue("value1")}
        >
          <Text
            size="h2"
            weight="bold"
            color={isSelectValue !== "value1" ? "blackopacity" : "black"}
          >
            Core Value 1
          </Text>
        </div>
        <div className="coreValueContent">
          <Text size="large" lineheight="27.2px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled
          </Text>
        </div>
      </div>
      <div className="coreValueTitle2Box">
        <div
          className="coreValueTitle"
          onClick={() => setIsSelectValue("value2")}
        >
          <Text
            size="h2"
            weight="bold"
            color={isSelectValue !== "value2" ? "blackopacity" : "black"}
          >
            Core Value 2
          </Text>
        </div>
        <div className="coreValueContent">
          <Text size="large" lineheight="27.2px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled
          </Text>
        </div>
      </div>
      <div className="coreValueTitle3Box">
        <div
          className="coreValueTitle"
          onClick={() => setIsSelectValue("value3")}
        >
          <Text
            size="h2"
            weight="bold"
            color={isSelectValue !== "value3" ? "blackopacity" : "black"}
          >
            Core Value 3
          </Text>
        </div>
        <div className="coreValueContent">
          <Text size="large" lineheight="27.2px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled
          </Text>
        </div>
      </div>
    </CoreValueContentBox>
  );
};

export default Content;
