import styled from "@emotion/styled";
import { ModalProps } from "../..";
import triangle from "../../../../../assets/GUIicon/triangle.png";

const DeadlineFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  .element {
    display: flex;
    align-items: center;
    margin: 0 40px 0 0;
    .key,
    .date {
      font-size: ${({ theme }) => theme.font.size.small}px;
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
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <DeadlineFormContainer>
      <div className="element">
        <span className="key">등록일자</span>
        <span className="date">
          {year}. {month}. {day}
        </span>
      </div>
      <div className="element">
        <span className="key">신청 마감일자</span>
        <span className="date">
          {year}. {month}. {day}
        </span>
        <div className="triangle">
          <img src={triangle} alt="triangle" />
        </div>
      </div>
    </DeadlineFormContainer>
  );
};

export default DeadlineForm;
