import styled from "@emotion/styled";

const FormContainer = styled.div`
  width: 590px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px;
  background-color: white;
  .sign-up {
    width: 210px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .sign-in {
    width: 190px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Formation = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { FormContainer, Header, Formation };
