import React from "react";
import {
  CategoryBox,
  CategoryContents,
  CategoryTitle,
} from "../../../styles/mainpage/applicationSection";
import { Text } from "../../common";

function RightSector() {
  return (
    <>
      <CategoryBox>
        <CategoryTitle>
          <Text size="medium" color="white">
            {`>`} 전공 및 학년
          </Text>
        </CategoryTitle>
        <CategoryContents>
          <Text size="medium" color="white">
            전공/학년 무관
          </Text>
        </CategoryContents>
      </CategoryBox>
      <CategoryBox>
        <CategoryTitle>
          <Text size="medium" color="white">
            {`>`} 대상
          </Text>
        </CategoryTitle>
        <CategoryContents>
          <Text size="medium" color="white">
            개발자로 진로를 확정하신 분
          </Text>
        </CategoryContents>
      </CategoryBox>
    </>
  );
}

export default RightSector;
