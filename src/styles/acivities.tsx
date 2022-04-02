import styled from "@emotion/styled";
export const Wrapper2 = styled.div`
  width: 100vw;
  min-width: 550px;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Masonry = styled.div`
  width: 900px;
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(3,220px);
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 100px;
`
export const Block = styled.div`
  margin: 5px;
  border-radius: 10px;
  background-color: rgba(1,1,1,0.3);
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  &:nth-of-type(7) {
    grid-column: span 2;
  }
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    filter: blur(4px);
  }
  `
export const Img = styled.img`
  width: 100%;
  `