import styled from "@emotion/styled";
import React from "react";
import { CategotyProps } from "../../../pages/activity";
import { Text } from "../../common";

const TagContainer = styled.div<{ selected: boolean }>`
  height: 22px;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  cursor: pointer;
  .selected {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 8px 0 0;
    background-color: ${({ selected }) => (selected ? "#000000" : "#868686")};
  }
`;

const Category = ({
  category,
  setCategory,
  index,
  selected,
  children,
}: {
  category: CategotyProps[];
  setCategory: (arg: CategotyProps[]) => void;
  index: number;
  selected: boolean;
  children: React.ReactNode;
}) => {
  const onClick = (index: number) => {
    const newCategory = [...category];
    for (let i = 0; i < newCategory.length; i++) {
      if (i !== index) {
        newCategory[i].selected = false;
      } else {
        newCategory[i].selected = true;
      }
    }
    setCategory(newCategory);
  };
  return (
    <TagContainer
      onClick={() => {
        onClick(index);
      }}
      selected={selected}
    >
      <div className="selected" />
      <Text size="medium" weight="medium" color={selected ? "black" : "block"}>
        {children}
      </Text>
    </TagContainer>
  );
};

export default Category;
