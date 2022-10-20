import { ModalProps } from "../..";
import { Header } from "../../../../../styles/activity/modal/template";
import { Text } from "../../../../common";
import DeadlineForm from "./DeadlineForm";

const AddModalHeader = ({
  setForm,
}: {
  setForm: (form: ModalProps) => void;
}) => {
  return (
    <Header>
      <div className="left">
        <Text size="h2" weight="medium">
          활동 추가
        </Text>
      </div>
      <div className="right">
        <DeadlineForm setForm={setForm} />
      </div>
    </Header>
  );
};

export default AddModalHeader;
