import { CloseBtn, Modal, ModalBox, Picture, Description } from '../styles/modal';
import ImageSrc from './MasonryBox';

interface ModalProps {
  modal: boolean;
  setModal: () => void;
}
const ModalWindow = (props: ModalProps) => {
  return (
    <ModalBox>
      <Modal>
        <Picture />
        <Description>
          <CloseBtn onClick={props.setModal}>⇤</CloseBtn>
        </Description>
      </Modal>
    </ModalBox>
  )
}
export default ModalWindow;