import { useNavigate } from "react-router-dom";
import { ModalProps } from "../..";
import { ButtonContainer } from "../../../../../styles/activity/modal/template";

const AddButton = ({ form }: { form: ModalProps }) => {
  const nav = useNavigate();
<<<<<<< HEAD
=======
  const {
    classification,
    deadline,
    title,
    description,
    leader,
    limit,
    generation,
    tag,
    thumbnail,
  } = form;
  const postForm = {
    classification,
    deadline,
    title,
    description,
    leader,
    limit,
    generation,
    tag,
    thumbnail,
  };
  const onSend = () => {
    if (
      deadline === null ||
      title === "" ||
      description === "" ||
      leader === "" ||
      limit === 0 ||
      generation === 0 ||
      tag?.length === 0 ||
      thumbnail === null
    ) {
      alert("모든 항목을 입력해주세요");
    } else {
      console.log(postForm);
    }
  };

>>>>>>> develop
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
<<<<<<< HEAD
      <button
        className="register"
        onClick={() => {
          console.log(form);
        }}
      >
=======
      <button className="register" onClick={onSend}>
>>>>>>> develop
        활동 올리기
      </button>
    </ButtonContainer>
  );
};

export default AddButton;
