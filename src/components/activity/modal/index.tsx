import styled from "@emotion/styled";
import mark from "../../../assets/activity/mark.png";
import ModalHeader from "./Header";
import ModalBody from "./body";
/**
 * dummy data
 */
import dummyImg from "../../../assets/dummy/modalImg.png";
import ModalTag from "./Tag";
import ModalButton from "./button";
import { useEffect } from "react";

const ModalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #696969;
`;

const ModalTemplate = styled.div`
  width: 1024px;
  height: 719px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 180px 0 90px 0;
  padding: 60px 40px 35px 40px;
  background-color: ${({ theme }) => theme.background.white};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  .mark {
    position: absolute;
    top: -10px;
    right: 40px;
  }
`;

export interface ModalProps {
  title: string;
  description: string;
  leader: string;
  generation: number;
  limit: number;
  registry: number;
  classification: "클래스" | "스터디" | "특강";
  deadline: Date;
  tag: string[];
  thumbnail: string;
}

const dummyModalData: ModalProps = {
  title: "알고리즘 스터디",
  description: `대한민국의 국민이 되는 요건은 법률로 정한다.\n
  국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.\n
  대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차,\n
  법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다.\n
  정당의 설립은 자유이며, 복수정당제는 보장된다.\n`,
  leader: "서청운",
  generation: 14,
  limit: 15,
  registry: 10,
  classification: "클래스",
  deadline: new Date(2022, 9, 27),
  tag: ["프로그래밍", "알고리즘", "자료구조", "C++", "C", "JAVA", "Python"],
  thumbnail: dummyImg,
};

const Template = () => {
  const now = new Date(Date.now());
  const diff = dummyModalData.deadline.getTime() - now.getTime();
  return (
    <ModalContainer>
      <ModalTemplate>
        <img src={mark} alt="mark" className="mark" />
        <ModalHeader data={dummyModalData} diff={diff} />
        <ModalBody data={dummyModalData} />
        <ModalTag tags={dummyModalData.tag} />
        <ModalButton diff={diff} />
      </ModalTemplate>
    </ModalContainer>
  );
};

export default Template;
