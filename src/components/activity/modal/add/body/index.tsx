import { ModalProps } from "../..";
import AddActivityForm from "./form";

const AddModalBody = ({
  form,
  setForm,
}: {
  form: ModalProps;
  setForm: (form: ModalProps) => void;
}) => {
  return <AddActivityForm form={form} setForm={setForm} />;
};

export default AddModalBody;
