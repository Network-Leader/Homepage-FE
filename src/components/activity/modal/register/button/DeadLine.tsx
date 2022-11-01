import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import timer from "../../../../../assets/GUIicon/timer.png";
import { Text } from "../../../../common";

const TimerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const DeadLineContainer = styled.div`
  width: 210px;
  height: 17px;
  display: flex;
  align-items: center;
  margin: 0 0 0 172px;
  .timer {
    width: 15.16px;
    margin: 0 5px 0 0;
    animation: ${TimerAnimation} 0.1s linear infinite;
  }
  .mixedTimer {
    width: 190px;
    display: flex;
    justify-content: space-between;
  }
`;

const DeadLine = ({ diff }: { diff: number }) => {
  const [day, hour, minute, second] = [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff / (1000 * 60 * 60)) % 24),
    Math.floor((diff / 1000 / 60) % 60),
    Math.floor((diff / 1000) % 60),
  ];
  return (
    <DeadLineContainer>
      <img src={timer} alt="timer" className="timer" />
      <div className="mixedTimer">
        <Text size="small" color="highlight" weight="medium">
          신청마감까지
        </Text>
        <Text size="small" color="highlight">
          {`${day.toString().padStart(2, "0")}`}일{" "}
          {`${hour.toString().padStart(2, "0")}`}시간{" "}
          {`${minute.toString().padStart(2, "0")}`}분{" "}
          {`${second.toString().padStart(2, "0")}`}초
        </Text>
      </div>
    </DeadLineContainer>
  );
};

export default DeadLine;
