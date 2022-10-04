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
  margin-left: 400px;
`

const HeaderMenuItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-width: 100px;
  height: 100%;
  cursor: pointer;
`

const LogoBox = styled.div`
  left: 205px;
  padding-top: 4px;
  margin-left: 100px;
  min-width: 211px;
  min-height: 101px;
  cursor: pointer;
`

export { 
  HeaderBox,
  HeaderContents,
  HeaderMenuItem,
  LogoBox 
};