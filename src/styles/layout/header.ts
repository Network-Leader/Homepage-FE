import styled from "@emotion/styled";

const HeaderBox = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  /* width: 1441px; */
  width: 100%;
  height: 105px;
  z-index: 999;
  background-color: black;
`

const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`

const HeaderMenuItem = styled.div`
  display: flex;
  position: relative;
  margin-left: 60px;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
`

const LogoBox = styled.div`
  left: 205px;
  margin-top: 4px;
`

export { 
  HeaderBox,
  HeaderContents,
  HeaderMenuItem,
  LogoBox 
};