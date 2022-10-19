import styled from "@emotion/styled";

const ModalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 105px 0 0 0;
  background-color: rgba(105, 105, 105, 0.9);
  position: fixed;
  top: 0;
`;

const ModalTemplate = styled.div`
  width: 1024px;
  height: 719px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 60px 40px 35px 40px;
  background-color: ${({ theme }) => theme.background.white};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  .mark {
    position: absolute;
    top: -10px;
    right: 40px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .tag {
      width: 125px;
      display: flex;
      justify-content: space-between;
      margin: 0 0 0 15px;
    }
  }
  .right {
    width: 410px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .info {
      width: auto;
      display: flex;
      align-items: center;
      .key {
        margin: 10px;
        display: flex;
        align-items: center;
        .icon {
          width: 14px;
          margin: 0 5px 0 0;
          &:nth-last-of-type(2) {
            width: 18px;
          }
          &:nth-last-of-type(3) {
            width: 22px;
          }
        }
      }
      .value {
      }
    }
  }
`;

const ModalBodyContainer = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
`;

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

const ButtonContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  .cancel,
  .register {
    height: 100%;
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.size.medium}px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.font.color.white};
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
  .cancel {
    width: 160px;
    background-color: ${({ theme }) => theme.background.block};
  }
  .register {
    width: 235px;
    background-color: ${({ theme }) => theme.background.purple};
  }
`;

export {
  ModalContainer,
  ModalTemplate,
  Header,
  ModalBodyContainer,
  ModalButtonContainer,
  ButtonContainer,
};
