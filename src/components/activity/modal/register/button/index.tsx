import { ModalButtonContainer } from "../../../../../styles/activity/modal/template";
import DeadLine from "./DeadLine";
import RegisterButton from "./RegisterButton";

const RegisterModalButton = ({ diff }: { diff: number }) => {
  return (
    <ModalButtonContainer>
      <div className="innerContainer">
        <DeadLine diff={diff} />
        <RegisterButton />
      </div>
    </ModalButtonContainer>
  );
};

export default RegisterModalButton;
