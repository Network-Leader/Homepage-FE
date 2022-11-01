import { useState } from "react";
import { CoreValueSection } from "../../../../styles/about/whoWeAre";
import { Image } from "../../../common";
import CoreValueImage1 from "../../../../assets/coreValue1.png";
import CoreValueImage2 from "../../../../assets/coreValue2.png";
import CoreValueImage3 from "../../../../assets/coreValue3.png";
import Content from "./Content";
const CoreValue = () => {
  const [isSelectValue, setIsSelectValue] = useState<string>("value1");

  return (
    <CoreValueSection isSelectValue={isSelectValue}>
      <div className="coreValueImageBox">
        <div className="image1">
          <Image
            src={CoreValueImage1}
            alt="CoreValueImage"
            width="460px"
            height="460px"
          />
        </div>
        <div className="image2">
          <Image
            src={CoreValueImage2}
            alt="CoreValueImage"
            width="460px"
            height="460px"
          />
        </div>
        <div className="image3">
          <Image
            src={CoreValueImage3}
            alt="CoreValueImage"
            width="460px"
            height="460px"
          />
        </div>
      </div>
      <div className="coreValueContentBox">
        <Content
          isSelectValue={isSelectValue}
          setIsSelectValue={setIsSelectValue}
        />
      </div>
    </CoreValueSection>
  );
};
export default CoreValue;
