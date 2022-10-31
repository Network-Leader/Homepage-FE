import { ModalProps } from "..";
import { Tag, Text } from "../../../common";
import leaderIcon from "../../../../assets/GUIicon/leader.png";
import generationIcon from "../../../../assets/GUIicon/generation.png";
import registerIcon from "../../../../assets/GUIicon/limit_person.png";
import { Header } from "../../../../styles/activity/modal/template";

const RegisterModalHeader = ({
  data: { title, classification, limit, registry, leader, generation },
  diff,
}: {
  data: ModalProps;
  diff: number;
}) => {
  const key = [
    {
      key: "담당자",
      value: leader,
      icon: leaderIcon,
    },
    {
      key: "신청인원",
      value: `${registry}/${limit}`,
      icon: registerIcon,
    },
    {
      key: "기수",
      value: `${generation}기`,
      icon: generationIcon,
    },
  ];
  return (
    <Header>
      <div className="left">
        <Text size="h2" weight="medium">
          {title}
        </Text>
        <div className="tag">
          <Tag radius="min" color="highlight" backgroundColor="lightpurple">
            {classification}
          </Tag>
          <Tag radius="min" color="highlight" backgroundColor="lightpurple">
            D-{Math.floor(diff / (1000 * 60 * 60 * 24))}
          </Tag>
          {/* 업데이트 예정 */}
        </div>
      </div>
      <div className="right">
        {key.map(({ key, value, icon }) => (
          <div key={key} className="info">
            <div className="key">
              <img src={icon} alt={key} className="icon" />
              <Text size="small" weight="medium" color="block">
                {key}
              </Text>
            </div>
            <Text size="small" weight="regular" color="highlight">
              {value}
            </Text>
          </div>
        ))}
      </div>
    </Header>
  );
};

export default RegisterModalHeader;
