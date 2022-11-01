import styled from "@emotion/styled";

export const CoverImageBox = styled.div<{ img: string }>`
  background-image: url({img});
  background-repeat: no-repeat;
  height: auto;
  width: 100%;
  background-size: cover;
  margin-top: 300px;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  margin-left: 15%;
  margin-right: 15%;
`;

export const HeaderBox = styled.div`
  justify-content: center;
  text-align: center;
  margin: 10%;
  margin-top: 20%;
`;

export const Category = styled.div`
  margin-right: 25%;
  margin-bottom: 30px;
  width: 95px;
`;

export const PeriodBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftPeriodBox = styled.div`
  display: flex;
  width: 50%;
  border-bottom: 2px solid gray;
`;

export const RightPeriodBox = styled.div`
  display: flex;
  width: 30%;
  border-bottom: 2px solid gray;
`;

export const SectorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const LeftSectorBox = styled.div`
  display: flex;
  width: 50%;
`;
export const RightSectorBox = styled.div`
  display: flex;
  width: 30%;
`;

export const CategoryBox = styled.div`
  display: flex;
  height: 30px;
  margin: 15px;
  width: 100%;
  justify-content: space-between;
`;

export const CategoryTitle = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryContents = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(74, 56, 244, 0.5);
  border-radius: 5px;
  padding: 10px;
  margin-left: 10px;
`;

export const RegularSector = styled.div`
  display: flex;
  flex-direction: column;
`;
