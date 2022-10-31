import React from "react";
import {
  CategoryBox,
  CategoryContents,
  CategoryTitle,
} from "../../../styles/mainpage/applicationSection";
import { Text } from "../../common";

function LeftSector() {
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
            컴퓨터공학과 신입생
          </Text>
        </CategoryContents>
      </CategoryBox>
      <CategoryBox>
        <Text size="medium" color="white">
          {`>`} 대상
        </Text>
        <Text size="medium" color="white">
          제한없음
        </Text>
      </CategoryBox>
    </>
  );
}

export default LeftSector;
