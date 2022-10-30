import styled from "@emotion/styled";
<<<<<<< HEAD
import { ModalProps } from "../..";
import triangle from "../../../../../assets/GUIicon/triangle.png";

const DeadlineFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
=======
import { useState } from "react";
import { ModalProps } from "../..";
import tri_black from "../../../../../assets/GUIicon/tri_black.png";
import tri_purple from "../../../../../assets/GUIicon/tri_purple.png";

const DeadlineFormContainer = styled.div<{ deadline: boolean }>`
  width: 100%;
  height: 100%;
  margin: 0 0 0 5px;
  display: flex;
  align-items: flex-end;
  position: relative;
>>>>>>> develop
  .element {
    display: flex;
    align-items: center;
    margin: 0 40px 0 0;
    .key,
<<<<<<< HEAD
    .date {
      font-size: ${({ theme }) => theme.font.size.small}px;
    }
=======
    .date_now,
    .date_dead {
      font-size: ${({ theme }) => theme.font.size.small}px;
    }
    .date_dead {
      color: ${({ theme, deadline }) =>
        deadline ? theme.font.color.highlight : theme.font.color.black};
    }
>>>>>>> develop
    .key {
      color: ${({ theme }) => theme.font.color.block};
      margin: 0 10px 0 0;
    }
    .date {
      color: ${({ theme }) => theme.font.color.black};
    }
    .triangle {
      display: flex;
      cursor: pointer;
      width: 9px;
      height: 4px;
      margin: 0 0 0 10px;
    }
  }
`;

const DeadlineForm = ({ setForm }: { setForm: (form: ModalProps) => void }) => {
<<<<<<< HEAD
=======
  const [deadline, setDeadline] = useState(false);
>>>>>>> develop
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
<<<<<<< HEAD
  return (
    <DeadlineFormContainer>
      <div className="element">
        <span className="key">등록일자</span>
        <span className="date">
=======

  return (
    <DeadlineFormContainer deadline={deadline}>
      {/**
       * @todo
       * 1. 캘린더를 누르면 캘린더가 나오도록 하기
       */}
      <div className="element">
        <span className="key">등록일자</span>
        <span className="date_now">
>>>>>>> develop
          {year}. {month}. {day}
        </span>
      </div>
      <div className="element">
<<<<<<< HEAD
        <span className="key">신청 마감일자</span>
        <span className="date">
          {year}. {month}. {day}
        </span>
        <div className="triangle">
          <img src={triangle} alt="triangle" />
=======
        <span className="key">신청 마감 일자</span>
        <span className="date_dead">
          {year}. {month}. {day}
        </span>
        <div
          className="triangle"
          onClick={() => {
            setDeadline(!deadline);
          }}
        >
          {deadline ? (
            <img src={tri_purple} alt="triangle" />
          ) : (
            <img src={tri_black} alt="triangle" />
          )}
>>>>>>> develop
        </div>
      </div>
    </DeadlineFormContainer>
  );
};

export default DeadlineForm;
