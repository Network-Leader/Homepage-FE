/**
 * @realData
 */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CategotyProps } from "../../../pages/activity";
import Content from "./content";
import addIcon from "../../../assets/GUIicon/add.png";
/**
 * @dummyImport
 */
import activityImg2 from "../../../assets/dummy/activityImg2.png";
import activityImg3 from "../../../assets/dummy/activityImg3.png";
import activityImg4 from "../../../assets/dummy/activityImg4.png";
import { useNavigate } from "react-router-dom";

export interface ContentProps {
  id: number;
  title: string;
  classification: "클래스" | "스터디" | "특강";
  generation: number;
  leader: string;
  thumbnail: string | null;
}

const dummyActivity: ContentProps[] = [
  {
    id: 0,
    title: "Swift Study",
    classification: "스터디",
    generation: 1,
    leader: "Jerry Kim",
    thumbnail: null,
  },
  {
    id: 1,
    title: "Spring Study",
    classification: "스터디",
    generation: 1,
    leader: "Daniel Park",
    thumbnail: activityImg2,
  },
  {
    id: 2,
    title: "Node Class",
    classification: "클래스",
    generation: 1,
    leader: "Happy Jamy",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Algorithm Study",
    classification: "스터디",
    generation: 1,
    leader: "J-ho",
    thumbnail: activityImg3,
  },
  {
    id: 4,
    title: "SW Maestro 특강",
    classification: "특강",
    generation: 1,
    leader: "cw-seo",
    thumbnail: null,
  },
  {
    id: 5,
    title: "KAKAO 특강",
    classification: "특강",
    generation: 1,
    leader: "dann",
    thumbnail: null,
  },
  {
    id: 6,
    title: "우아한 형제들 특강",
    classification: "특강",
    generation: 1,
    leader: "younhan kim",
    thumbnail: activityImg3,
  },
  {
    id: 7,
    title: "CS Study",
    classification: "스터디",
    generation: 1,
    leader: "JISEO - LEE",
    thumbnail: activityImg4,
  },
  {
    id: 8,
    title: "Mac OS CLASS",
    classification: "클래스",
    generation: 1,
    leader: "cw - seo",
    thumbnail: null,
  },
];

const BodyContainerContainer = styled.div`
  width: 1017px;
  min-height: 1027px;
  position: relative;
  padding: 0 0 200px 0;
  .addBox {
    width: 100px;
    height: 1207px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    right: -100px;
    .add {
      width: 48px;
      cursor: pointer;
    }
  }
`;
const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50.57px;
  grid-row-gap: 43.28px;
`;

const Body = ({ category }: { category: CategotyProps[] }) => {
  const nav = useNavigate();
  const [contents, setContents] = useState<ContentProps[]>(dummyActivity);
  useEffect(() => {
    const selectedCategory = category.find(({ selected }) => selected);
    if (selectedCategory?.name === "전체") {
      setContents(dummyActivity);
    } else {
      const filteredContents = dummyActivity.filter(
        ({ classification }) => classification === selectedCategory?.name
      );
      setContents(filteredContents);
    }
  }, [category]);
  return (
    <BodyContainerContainer>
      <BodyContainer>
        {contents.map((activity) => (
          <Content key={activity.id} activity={activity} />
        ))}
      </BodyContainer>
      <div className="addBox">
        <div
          onClick={() => {
            nav("add");
          }}
        >
          <img src={addIcon} alt="add" className="add" />
        </div>
      </div>
    </BodyContainerContainer>
  );
};

export default Body;
