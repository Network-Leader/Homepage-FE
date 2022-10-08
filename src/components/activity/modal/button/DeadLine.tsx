import styled from "@emotion/styled";
import timer from "../../../../assets/activity/timer.png";
import { Text } from "../../../common";

const DeadLineContainer = styled.div`
  width: 180px;
  height: 17px;
  display: flex;
  align-items: center;
  margin-left: 230px;
  .timer {
    margin: 0 5px 0 0;
  }
  .mixedTimer {
    width: 155px;
    display: flex;
    justify-content: space-between;
  }
`;

const DeadLine = ({ diff }: { diff: number }) => {
  const [day, hour, minute] = [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff / (1000 * 60 * 60)) % 24),
    Math.floor((diff / 1000 / 60) % 60),
  ];
  return (
    <DeadLineContainer>
      <img src={timer} alt="timer" className="timer" />
      <div className="mixedTimer">
        <Text size="small" color="highlight" weight="medium">
          신청마감까지
        </Text>
        <Text size="small" color="highlight">
          {day}일 {hour}시간 {minute}분
        </Text>
      </div>
    </DeadLineContainer>
  );
};

export default DeadLine;
