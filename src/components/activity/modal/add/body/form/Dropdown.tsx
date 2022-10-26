import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { ModalProps } from "../../..";

const DropdownContainer = styled.ul`
  width: 114px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 7px;
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  z-index: 1;
`;

const Selection = styled.li`
  width: 100%;
  height: 25px;
  color: ${({ theme }) => theme.font.color.black};
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 0 0 0 9px;
  margin: 0 0 1px 0;
  font-size: ${({ theme }) => theme.font.size.medium}px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    color: ${({ theme }) => theme.font.color.white};
    background-color: ${({ theme }) => theme.background.purple};
  }
  &:first-of-type {
    color: ${({ theme }) => theme.font.color.white};
    background-color: ${({ theme }) => theme.background.purple};
  }
`;

const Element = ({
  children,
  form,
  setForm,
  name,
}: {
  children: string | number;
  form: ModalProps;
  setForm: (form: ModalProps) => void;
  name: string | number;
}) => {
  const newForm = { ...form };
  const onClick = () => {
    name === "제한 인원수"
      ? (newForm.limit = children)
      : (newForm.generation = children);
    setForm(newForm);
  };
  return <Selection onClick={onClick}>{children}</Selection>;
};

const Dropdown = ({
  name,
  form,
  setForm,
}: {
  name: string;
  form: ModalProps;
  setForm: (form: ModalProps) => void;
}) => {
  const LIMIT_OR_GENERATION = [name, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "제한없음"];
  return (
    <DropdownContainer>
      {name === "제한 인원수"
        ? LIMIT_OR_GENERATION.map((n) => (
            <Element key={n} form={form} setForm={setForm} name={name}>
              {n}
            </Element>
          ))
        : LIMIT_OR_GENERATION.slice(0, 11).map((n) => (
            <Element key={n} form={form} setForm={setForm} name={name}>
              {n}
            </Element>
          ))}
    </DropdownContainer>
  );
};

export default Dropdown;
