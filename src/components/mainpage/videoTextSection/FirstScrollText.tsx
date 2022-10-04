import React from "react";
import { Text } from "../../common";
import { FirstTextBox } from "../../../styles/mainpage/videoTextSection";
import { ScrollYType } from ".";
const FirstScrollText = ({ scrollY }: ScrollYType) => {
  return (
    <FirstTextBox scrollY={scrollY}>
      <Text size="h1" lineheight="90.37px" color="white">
        좋은 사람들이 모여 <br />
        좋은 개발자가 되는 곳,
      </Text>
    </FirstTextBox>
  );
};

export default FirstScrollText;
