import styled from "@emotion/styled";
import { ModalProps } from ".";
import { Tag, Text } from "../../common";
import leaderIcon from "../../../assets/activity/leader.png";
import generationIcon from "../../../assets/activity/generation.png";
import registerIcon from "../../../assets/activity/register.png";

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .tag {
      width: 125px;
      display: flex;
      justify-content: space-between;
      margin: 0 0 0 15px;
    }
  }
  .right {
    width: 410px;
    display: flex;
    justify-content: space-between;
    .info {
      width: auto;
      display: flex;
      align-items: center;
      .key {
        margin: 10px;
        display: flex;
        align-items: center;
        .icon {
          margin: 0 5px 0 0;
        }
      }
      .value {
      }
    }
  }
`;
const ModalHeader = ({
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

export default ModalHeader;
