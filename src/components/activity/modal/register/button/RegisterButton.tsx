import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../../../../../styles/activity/modal/template";

const RegisterButton = () => {
  const nav = useNavigate();
  return (
    <ButtonContainer>
      <button
        className="cancel"
        onClick={() => {
          nav("/activity");
        }}
      >
        취소
      </button>
      <button className="register">신청하기</button>
    </ButtonContainer>
  );
};

export default RegisterButton;
