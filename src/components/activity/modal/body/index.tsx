import styled from "@emotion/styled";
import { ModalProps } from "..";
import Description from "./Description";
import Thumbnail from "./Thumbnail";

const ModalBodyContainer = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
`;

const ModalBody = ({
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

export default ModalBody;
