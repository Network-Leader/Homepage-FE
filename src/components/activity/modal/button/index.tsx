import styled from "@emotion/styled";
import DeadLine from "./DeadLine";
import RegisterButton from "./RegisterButton";

const ModalButtonContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-end;
  .innerContainer {
    width: 407px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ModalButton = ({ diff }: { diff: number }) => {
  return (
    <ModalButtonContainer>
      <div className="innerContainer">
        <DeadLine diff={diff} />
        <RegisterButton />
      </div>
    </ModalButtonContainer>
  );
};

export default ModalButton;
