import { useNavigate } from "react-router-dom";
import { ModalProps } from "../..";
import { ButtonContainer } from "../../../../../styles/activity/modal/template";

const AddButton = ({ form }: { form: ModalProps }) => {
  const nav = useNavigate();
  return (
    <ButtonContainer style={{ marginTop: "23px" }}>
      <button
        className="cancel"
        onClick={() => {
          nav("/activity");
        }}
      >
        취소
      </button>
      <button
        className="register"
        onClick={() => {
          console.log(form);
        }}
      >
        활동 올리기
      </button>
    </ButtonContainer>
  );
};

export default AddButton;
