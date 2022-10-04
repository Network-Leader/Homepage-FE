import styled from "@emotion/styled";

const FooterBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1441px;
  height: 318px;
  left: 0px;
  top: 6057px;
  background-color: #333;
`

const FooterIconBox = styled.div`
  display: flex;
  /* display: grid; */
  /* place-items: center; */
  min-height: 35px;
  margin-top: 148px;
  min-width: 942px;
  border-bottom: 2px solid white;

`

const FooterContents = styled.div`
  
  /* display: flex; */
  min-width: 942px;
  color: white;
  padding: 40px 0px;
`

export { FooterBox, FooterIconBox, FooterContents };