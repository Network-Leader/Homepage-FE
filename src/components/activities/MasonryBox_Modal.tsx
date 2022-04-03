import { CloseBtn, Modal, ModalBox, Picture, Description } from '../../styles/activities/modal';
import ImageSrc from './MasonryBox';

interface ModalProps {
  modal: boolean;
  setModal: () => void;
}

const ModalWindow = (props: ModalProps) => {
  return (
    <ModalBox>
      <Modal>
        <Picture alt='활동사진' />
        <Description>
          설명
          <CloseBtn onClick={props.setModal}>⇤</CloseBtn>
        </Description>
      </Modal>
    </ModalBox>
  )
}
export default ModalWindow;