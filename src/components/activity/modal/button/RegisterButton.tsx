import styled from "@emotion/styled";

const RegisterButtonContainer = styled.div`
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

const RegisterButton = () => {
  return (
    <RegisterButtonContainer>
      <button className="cancel">취소</button>
      <button className="register">신청하기</button>
    </RegisterButtonContainer>
  );
};

export default RegisterButton;
