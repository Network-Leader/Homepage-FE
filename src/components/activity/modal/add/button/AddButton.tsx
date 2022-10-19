import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../../../../../styles/activity/modal/template";

const AddButton = () => {
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
      <button className="register">활동 올리기</button>
    </ButtonContainer>
  );
};

export default AddButton;
