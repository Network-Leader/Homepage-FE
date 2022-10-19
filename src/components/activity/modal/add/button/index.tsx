import { ModalButtonContainer } from "../../../../../styles/activity/modal/template";
import AddButton from "./AddButton";

const AddModalButton = () => {
  return (
    <ModalButtonContainer>
      <div className="innerContainer">
        <AddButton />
      </div>
    </ModalButtonContainer>
  );
};

export default AddModalButton;
