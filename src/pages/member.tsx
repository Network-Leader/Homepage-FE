import styled from "@emotion/styled";
import ImageContainer from "../components/member/Image";
import { Outlet } from "react-router-dom";

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Member = () => {
  return (
    <SignInContainer>
      <ImageContainer />
      <Outlet />
    </SignInContainer>
  );
};

export default Member;
