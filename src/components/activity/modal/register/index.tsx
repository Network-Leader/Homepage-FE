import { useEffect, useState } from "react";
import { ModalProps } from "..";
import mark from "../../../../assets/activity/mark.png";
import RegisterModalBody from "./body";
import RegisterModalButton from "./button";
import RegisterModalHeader from "./Header";
import RegisterModalTag from "./RegisterModalTag";

const dummyModalData: ModalProps = {
  title: "알고리즘 스터디",
  description: `대한민국의 국민이 되는 요건은 법률로 정한다.
  국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.
  대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차,
  법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다.
  정당의 설립은 자유이며, 복수정당제는 보장된다.`,
  leader: "서청운",
  generation: 14,
  limit: 15,
  registry: 10,
  classification: "클래스",
  deadline: new Date(2022, 10, 27),
  tag: ["프로그래밍", "알고리즘", "자료구조", "C++", "C", "JAVA", "Python"],
  thumbnail: null,
};

const RegisterActivityModal = () => {
  /**
   * @description axios로 받아온 데이터를 저장하는 state
   */
  const [modalData, setModalData] = useState<ModalProps>(dummyModalData);
  const [diff, setDiff] = useState(
    modalData.deadline!.getTime() - new Date(Date.now()).getTime()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setDiff((prev) => prev - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [diff]);
  return (
    <>
      <img src={mark} alt="mark" className="mark" />
      <RegisterModalHeader data={modalData} diff={diff} />
      <RegisterModalBody data={modalData} />
      <RegisterModalTag tags={modalData.tag} />
      <RegisterModalButton diff={diff} />
    </>
  );
};

export default RegisterActivityModal;
