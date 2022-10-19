// import { Text } from "../../common";
// import { ThirdTextBox } from "../../../styles/mainpage/videoTextSection";
// import { ScrollYType } from ".";
// const ThirdScrollText = ({ scrollY }: ScrollYType) => {
//   return (
//     <ThirdTextBox scrollY={scrollY}>
//       <Text size="h3" lineheight="56.32px" >
//         잘하는 개발자가 되기 위한 방법은 많습니다.
//         <br />
//         하지만 우리들은 좋은 개발자가 되고 싶습니다.
//       </Text>
//       <Text size="h3" lineheight="56.32px">
//         때로는 함께 목표를 위해 애써 달려가다가도, <br />
//         동료들을 위해 기다려 주고 도와줄 수 있는 그런 사람.
//       </Text>
//       <Text size="h3" lineheight="56.32px">
//         목표를 달성하고 성취감을 느끼며 행복을 얻는 사람, <br />
//         그 행복을 느끼기 위해 더 노력하고, <br />이 노력으로 동료들의 수고를
//         덜어주는 그런사람.
//       </Text>
//     </ThirdTextBox>
//   );
// };

// export default ThirdScrollText;
import { Text } from "../../common";
import { ThirdTextBox } from "../../../styles/mainpage/videoTextSection";
import { ScrollYType } from ".";
const ThirdScrollText = ({ scrollY }: ScrollYType) => {
  return (
    <ThirdTextBox scrollY={scrollY}>
      <div className="text1">
        <Text size="h3" lineheight="56.32px" color="white">
          잘하는 개발자가 되기 위한 방법은 많습니다.
          <br />
          하지만 우리들은 좋은 개발자가 되고 싶습니다.
        </Text>
      </div>
      <div className="text2">
        <Text size="h3" lineheight="56.32px" color="white">
          때로는 함께 목표를 위해 애써 달려가다가도, <br />
          동료들을 위해 기다 려 주고 도와줄 수 있는 그런 사람.
        </Text>
      </div>
      <div className="text3">
        <Text size="h3" lineheight="56.32px" color="white">
          목표를 달성하고 성취감을 느끼며 행복을 얻는 사람, <br />
          그 행복을 느끼기 위해 더 노력하고, <br />이 노력으로 동료들의 수고를
          덜어주는 그런사람.
        </Text>
      </div>
    </ThirdTextBox>
  );
};

export default ThirdScrollText;
