import { ProjectSection } from "../../../../styles/about/whatWeDo";
import { Image, Text } from "../../../common";
import ProjectImg from "../../../../assets/project_img.png";
import TagCollection from "./TagCollection";

const Project = () => {
  return (
    <ProjectSection>
      <div className="title">
        <Text size="h1" weight="bold">
          NL Company Project
        </Text>
      </div>
      <div className="contentBox">
        <Image src={ProjectImg} alt="projectimg" />
        <div className="content">
          <div className="contentTitle">
            <Text size="h2" weight="bold" lineheight="50.4px">
              실제 배포 프로젝트를 만들어보며
              <br />
              경험하는 IT 기업이 일하는 방법
            </Text>
          </div>
          <div className="contentDescription">
            <Text size="xlarge" lineheight="31.18px">
              동아리 홈페이지 등 실제 필요한 서비스를 만들고 git 기반의 협업을
              <br />
              경험해보고 서로 코드를 리뷰하고 더 좋은 방식으로 발전시켜가며 실제
              <br />
              IT기업이 일하는 방식을 경험해봅니다.
            </Text>
          </div>
          <TagCollection />
        </div>
      </div>
    </ProjectSection>
  );
};

export default Project;
