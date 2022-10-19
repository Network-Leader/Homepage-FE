import styled from "@emotion/styled";
import React from "react";
import { CategotyProps } from "../../../pages/activity";
import { Text } from "../../common";

const TagContainer = styled.div<{
  selected: boolean;
  categoryColor: string;
}>`
  height: 22px;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  cursor: pointer;
  .selected {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: background-color 0.2s linear;
    margin: 0 8px 0 0;
    background-color: ${({ selected, categoryColor }) =>
      selected ? categoryColor : "#868686"};
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
  const { color } = category.filter((item) => item.selected)[0];

  return (
    <TagContainer
      onClick={() => {
        onClick(index);
      }}
      selected={selected}
      categoryColor={color}
    >
      <div className="selected" />
      <Text size="medium" weight="medium" color={selected ? "black" : "block"}>
        {children}
      </Text>
    </TagContainer>
  );
};

export default Category;
