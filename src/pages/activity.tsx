import styled from "@emotion/styled";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Body from "../components/activity/body";
import Categories from "../components/activity/category";
import Head from "../components/activity/head";
import { GlobalContainer } from "../styles/layout/layout";

export interface CategotyProps {
  name: string;
  selected: boolean;
  color: string;
}

const ActivityContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const Activity = () => {
  const [category, setCategory] = useState<CategotyProps[]>([
    { name: "전체", selected: true, color: "black" },
    { name: "스터디", selected: false, color: "#8EA1FF" },
    { name: "클래스", selected: false, color: "#FFC466" },
    { name: "특강", selected: false, color: "#D5A0FF" },
  ]);
  return (
    <ActivityContainer>
      <GlobalContainer>
        <Head />
        <Categories category={category} setCategory={setCategory} />
        <Body category={category} />
      </GlobalContainer>
      <Outlet />
    </ActivityContainer>
  );
};

export default Activity;
