import styled from "@emotion/styled";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 997;
  width: 100%;
  height: 318px;
  left: 0px;
  bottom: 0;
  background-color: black;
`;
const FooterRightBox = styled.div`
  /* float: right; */
`;

const FooterLeftBox = styled.div`
  margin-right: auto;
`;
const FooterIconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 35px;
  margin-top: 148px;
  min-width: 942px;
  border-bottom: 2px solid white;
`;

const FooterContents = styled.div`
  min-width: 942px;
  color: white;
  padding: 40px 0px;
`;

export {
  FooterBox,
  FooterIconBox,
  FooterRightBox,
  FooterLeftBox,
  FooterContents,
};
