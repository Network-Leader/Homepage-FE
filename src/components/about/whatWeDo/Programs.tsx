import { ProgramsSection } from "../../../styles/about/whatWeDo";
import { Text } from "../../common";

const Programs = () => {
  return (
    <ProgramsSection>
      <div className="title">
        <Text size="h2" weight="bold">
          NL Programs
        </Text>
      </div>
      <div className="contentBox">
        <div className="content1">
          <Text size="large" lineheight="30.59px">
            클래스는 정기적으로 진행되는 강의입니다. <br />한 분야에 특화된
            강사가 여러 명을 알려주는 <br />
            형식으로, 알고리즘이나 기초 프로그래밍 교육 등 <br />
            다양한 분야의 강의가 진행되고 있습니다.
          </Text>
        </div>
        <div className="content2">
          <Text size="large" lineheight="30.59px">
            클래스는 정기적으로 진행되는 강의입니다. <br />한 분야에 특화된
            강사가 여러 명을 알려주는 <br />
            형식으로, 알고리즘이나 기초 프로그래밍 교육 등 <br />
            다양한 분야의 강의가 진행되고 있습니다.
          </Text>
        </div>
        <div className="content3">
          <Text size="large" lineheight="30.59px">
            클래스는 정기적으로 진행되는 강의입니다. <br />한 분야에 특화된
            강사가 여러 명을 알려주는 <br />
            형식으로, 알고리즘이나 기초 프로그래밍 교육 등 <br />
            다양한 분야의 강의가 진행되고 있습니다.
          </Text>
        </div>
      </div>
    </ProgramsSection>
  );
};

export default Programs;
