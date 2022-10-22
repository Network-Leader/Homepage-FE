import styled from "@emotion/styled";
import { ModalProps } from "../..";
import { Header } from "../../../../../styles/activity/modal/template";
import { Text } from "../../../../common";
import DeadlineForm from "./DeadlineForm";
import checkIcon from "../../../../../assets/GUIicon/check.png";
import { useEffect, useState } from "react";

const selectTag: {
  classification: "클래스" | "스터디" | "특강";
  selected: boolean;
}[] = [
  {
    classification: "클래스",
    selected: true,
  },
  {
    classification: "스터디",
    selected: false,
  },
  {
    classification: "특강",
    selected: false,
  },
];

const Tag = styled.div<{ selected: boolean }>`
  display: flex;
  transition: all 0.2s linear;
  align-items: center;
  padding: 8px 12px;
  margin: 0 8px 0 0;
  background-color: ${({ selected, theme }) =>
    selected ? theme.background.purple : theme.background.block};
  border-radius: 5px;
  cursor: pointer;
  .checked {
    width: 15px;
    margin: 0 5px 0 0;
  }
`;

const AddModalHeader = ({
  form,
  setForm,
}: {
  form: ModalProps;
  setForm: (form: ModalProps) => void;
}) => {
  const [selected, setSelected] = useState(selectTag);
  const onClick = (index: number) => {
    const newSelected = selected.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setSelected(newSelected);
    const { classification }: { classification: "클래스" | "스터디" | "특강" } =
      newSelected.filter(({ selected }) => selected)[0];
    setForm({ ...form, classification });
  };
  return (
    <Header>
      <div className="left">
        <Text size="h2" weight="medium">
          활동 추가
        </Text>
        <div className="addTag">
          {selected.map(({ classification, selected }, index) => (
            <Tag
              key={classification}
              selected={selected}
              onClick={() => {
                onClick(index);
              }}
            >
              {selected && (
                <img className="checked" src={checkIcon} alt="checked" />
              )}
              <Text color={selected ? "white" : "black"} size="medium">
                {classification}
              </Text>
            </Tag>
          ))}
        </div>
      </div>
      <div className="right">
        <DeadlineForm setForm={setForm} />
      </div>
    </Header>
  );
};

export default AddModalHeader;
