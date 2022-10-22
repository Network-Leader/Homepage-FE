import { useState } from "react";
import { ModalProps } from "..";
import AddModalBody from "./body";
import AddModalButton from "./button";
import AddModalHeader from "./header";
import AddModalTag from "./tag/AddModalTag";

const AddActivityModal = () => {
  const [form, setForm] = useState<ModalProps>({
    title: "",
    description: "",
    leader: "",
    generation: 0,
    limit: 0,
    registry: 0,
    classification: "스터디",
    deadline: null,
    tag: [],
    thumbnail: null,
  });
  return (
    <>
      <AddModalHeader form={form} setForm={setForm} />
      {/* 달력(deadline) 추가하기 */}
      <AddModalBody form={form} setForm={setForm} />
      {/* 바디에 셀렉트 인풋 드롭다운UI (limit, generation) */}
      <AddModalTag form={form} setForm={setForm} />
      {/* 버튼에 폼 post요청기능 추가하기 */}
      <AddModalButton form={form} />
    </>
  );
};

export default AddActivityModal;
