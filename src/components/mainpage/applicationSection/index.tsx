import React from "react";
import {
  Category,
  CategoryBox,
  CategoryContents,
  CategoryTitle,
  CoverImageBox,
  HeaderBox,
  LeftPeriodBox,
  LeftSectorBox,
  PeriodBox,
  RegularSector,
  RightPeriodBox,
  RightSectorBox,
  SectorBox,
} from "../../../styles/mainpage/applicationSection";
import { MainBox } from "../../../styles/mainpage/applicationSection";
import { Text } from "../../common";
import CoverImg from "../../../assets/application_image.png";
import RightSector from "./RightSector";
import LeftSector from "./LeftSector";

function ApplicationSection() {
  return (
    <CoverImageBox
      img={CoverImg} // 이걸로 안댐
      style={{
        backgroundImage: `url(${CoverImg})`,
      }}
    >
      <MainBox>
        <HeaderBox>
          <Text size="h1" weight="bold" color="white">
            Application
          </Text>
        </HeaderBox>

        <PeriodBox>
          <LeftPeriodBox>
            <Category>
              <Text size="h4" color="white">
                모집 시기
              </Text>
            </Category>

            <CategoryTitle>
              <Text size="h4" color="white">
                정기 모집
              </Text>
            </CategoryTitle>
            <CategoryContents>
              <Text size="h4" color="white">
                2~3월
              </Text>
            </CategoryContents>
          </LeftPeriodBox>
          <RightPeriodBox>
            <Text size="h4" color="white">
              수시 모집
            </Text>
          </RightPeriodBox>
        </PeriodBox>
        <SectorBox>
          <LeftSectorBox>
            <Category>
              <Text size="h4" color="white">
                모집 부문
              </Text>
            </Category>
            <RegularSector>
              <Text size="h4" color="white">
                정기모집 부문
              </Text>
              <LeftSector />
            </RegularSector>
          </LeftSectorBox>

          <RightSectorBox>
            <div>
              <Text size="h4" color="white">
                수시모집 부문
              </Text>

              <RightSector />
            </div>
          </RightSectorBox>
        </SectorBox>
      </MainBox>
    </CoverImageBox>
  );
}

export default ApplicationSection;
