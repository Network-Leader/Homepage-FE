import { useState } from "react";
import Body from "../components/activity/body";
import Categories from "../components/activity/category";
import Head from "../components/activity/head";
import { GlobalContainer } from "../styles/layout/layout";

export interface CategotyProps {
  name: string;
  selected: boolean;
}

const Activity = () => {
  const [category, setCategory] = useState<CategotyProps[]>([
    { name: "전체", selected: true },
    { name: "스터디", selected: false },
    { name: "클래스", selected: false },
    { name: "특강", selected: false },
  ]);
  return (
    <GlobalContainer>
      <Head />
      <Categories category={category} setCategory={setCategory} />
      <Body />
    </GlobalContainer>
  );
};

export default Activity;
