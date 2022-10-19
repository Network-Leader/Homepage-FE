import { ModalProps } from "../..";
import { ModalBodyContainer } from "../../../../../styles/activity/modal/template";
import Description from "./Description";
import Thumbnail from "./Thumbnail";

const RegisterModalBody = ({
  data: { description, thumbnail },
}: {
  data: ModalProps;
}) => {
  return (
    <ModalBodyContainer>
      <Description description={description} />
      <Thumbnail thumb={thumbnail} />
    </ModalBodyContainer>
  );
};

export default RegisterModalBody;
