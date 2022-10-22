import styled from "@emotion/styled";
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
  .element {
    display: flex;
    align-items: center;
    margin: 0 40px 0 0;
    .key,
    .date_now,
    .date_dead {
      font-size: ${({ theme }) => theme.font.size.small}px;
    }
    .date_dead {
      color: ${({ theme, deadline }) =>
        deadline ? theme.font.color.highlight : theme.font.color.black};
    }
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
  const [deadline, setDeadline] = useState(false);
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <DeadlineFormContainer deadline={deadline}>
      <div className="element">
        <span className="key">등록일자</span>
        <span className="date_now">
          {year}. {month}. {day}
        </span>
      </div>
      <div className="element">
        <span className="key">신청 마감일자</span>
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
        </div>
      </div>
    </DeadlineFormContainer>
  );
};

export default DeadlineForm;
