import { DropDownList } from "../../../styles/layout/main/header";
import Link from "next/link";

type navbarProps = {
  isHover: boolean;
  setIsHover: (isHover: boolean) => void;
};

const DropDown = ({ isHover, setIsHover }: navbarProps) => {
  const introList = [
    { text: "동아리원", link: "#" },
    { text: "활동사진", link: "/activity" },
    { text: "결과물", link: "#" },
  ];
  const actList = [
    { text: "캘린더", link: "/calendar", target: "_blank" },
    { text: "활동현황", link: "/course", target: "" },
  ];
  const dataList = [
    { text: "족보", link: "#" },
    { text: "스터디자료", link: "#" },
  ];
  const boardList = [
    { text: "QnA", link: "#" },
    { text: "자유", link: "#" },
  ];
  return (
    <DropDownList isHover={isHover}>
      <div className="intro">
        {introList.map((list, index) => (
          <div key={index} className="intro_list">
            <Link href={list.link}>
              <a onClick={() => setIsHover(false)}>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="act">
        {actList.map((list, index) => (
          <div key={index} className="act_list">
            <Link href={list.link}>
              <a onClick={() => setIsHover(false)} target={list.target}>
                {list.text}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="data">
        {dataList.map((list, index) => (
          <div key={index} className="data_list">
            <Link href={list.link}>
              <a onClick={() => setIsHover(false)}>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="board">
        {boardList.map((list, index) => (
          <div key={index} className="board_list">
            <Link href={list.link}>
              <a onClick={() => setIsHover(false)}>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
    </DropDownList>
  );
};

export default DropDown;
