import { ModalProps } from "../..";
import { ModalButtonContainer } from "../../../../../styles/activity/modal/template";
import AddButton from "./AddButton";

const AddModalButton = ({ form }: { form: ModalProps }) => {
  return (
    <ModalButtonContainer>
      <div className="innerContainer">
        <AddButton form={form} />
      </div>
    </ModalButtonContainer>
  );
};

export default AddModalButton;
