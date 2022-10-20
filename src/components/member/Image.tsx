import styled from "@emotion/styled";
import member from "../../assets/sign/member.png";

const ImageContainer = styled.div`
  width: calc(100% - 590px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .img {
    width: 100%;
  }
`;

const Image = () => {
  return (
    <ImageContainer>
      <img className="img" src={member} alt="sign in" />
    </ImageContainer>
  );
};

export default Image;
