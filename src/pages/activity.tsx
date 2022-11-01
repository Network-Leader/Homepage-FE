import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  const path = useLocation().pathname.split("/")[2];
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    path ? setIsModal(true) : setIsModal(false);
  }, [path]);
  useEffect(() => {
    isModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isModal]);
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
