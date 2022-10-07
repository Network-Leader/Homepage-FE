import { Text } from "../../common";
import { SecondTextBox } from "../../../styles/mainpage/videoTextSection";
import { ScrollYType } from ".";
const SecondScrollText = ({ scrollY }: ScrollYType) => {
  return (
    <SecondTextBox scrollY={scrollY}>
      <div style={{ fontSize: "160px", color: "white" }}>NL</div>
    </SecondTextBox>
  );
};

export default SecondScrollText;
