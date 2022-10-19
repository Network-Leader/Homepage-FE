import styled from "@emotion/styled";
import { CategotyProps } from "../../../pages/activity";
import Category from "./Category";

const CategoryContainer = styled.div`
  width: 1017px;
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
`;

const Categories = ({
  category,
  setCategory,
}: {
  category: CategotyProps[];
  setCategory: (arg: CategotyProps[]) => void;
}) => {
  return (
    <CategoryContainer>
      {category.map(({ name, selected }, index) => (
        <Category
          key={name}
          category={category}
          setCategory={setCategory}
          index={index}
          selected={selected}
        >
          {name}
        </Category>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
