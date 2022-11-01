import { TagBox } from "../../../../styles/about/whatWeDo";
import { Tag, Text } from "../../../common";

const dummyTagData = [
  {
    content: "Github",
    index: 1,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개1",
  },
  {
    content: "Slack",
    index: 2,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개2",
  },
  {
    content: "Notion",
    index: 3,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개3",
  },
  {
    content: "Jira",
    index: 4,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개4",
  },
  {
    content: "React.js",
    index: 5,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개5",
  },
  {
    content: "Next.js",
    index: 6,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개6",
  },
  {
    content: "Nest.js",
    index: 7,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개7",
  },
  {
    content: "MongoDB",
    index: 8,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개8",
  },
  {
    content: "AWS",
    index: 9,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개9",
  },
  {
    content: "Github Action",
    index: 10,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개10",
  },
  {
    content: "CodeDeploy",
    index: 11,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개11",
  },
  {
    content: "Terraform",
    index: 12,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개12",
  },
  {
    content: "Jenkins",
    index: 13,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개13",
  },
  {
    content: "Ansible",
    index: 14,
    description: "팀 프로젝트의 코드 저장 및 오픈소스 공개14",
  },
];

const TagCollection = () => {
  return (
    <TagBox>
      {dummyTagData.map((item) => (
        <>
          <Tag
            key={item.index}
            color="blue"
            backgroundColor="blueopacity"
            fontWeight="bold"
            fontSize="xxlarge"
            padding="large"
            className="tag"
          >
            {item.content}
            <div className="tagDetail">
              <div className="eclipse"></div>
              <span className="title">활용 목적</span>
              <div className="des">
                <Text color="black" size="medium" weight="bold">
                  {item.description}
                </Text>
              </div>
            </div>
          </Tag>
        </>
      ))}
    </TagBox>
  );
};

export default TagCollection;
