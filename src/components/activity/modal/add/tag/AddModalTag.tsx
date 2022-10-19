import styled from "@emotion/styled";
import { ModalProps } from "../..";
import { Text } from "../../../../common";
import addIcon from "../../../../../assets/GUIicon/add.png";
import removeIcon from "../../../../../assets/GUIicon/remove.png";
import React, { useState } from "react";

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const Tags = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  .tagBox {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .tag {
      padding: 8px 12px;
      background-color: ${({ theme }) => theme.background.black};
      color: ${({ theme }) => theme.font.color.white};
      border-radius: ${({ theme }) => theme.borderRadius.min};
    }
    .existTag {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: ${({ theme }) => theme.background.black};
      border-radius: ${({ theme }) => theme.borderRadius.min};
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0 0 0 5px;
        cursor: pointer;
        .minus {
          width: 14px;
        }
      }
    }
    .addTag {
      width: auto;
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: #d8d8d8;
      border-radius: ${({ theme }) => theme.borderRadius.min};
      .input {
        width: 60px;
        background-color: transparent;
        border: none;
        font-size: ${({ theme }) => theme.font.size.medium};
        font-weight: ${({ theme }) => theme.font.weight.medium};
        &:focus {
          outline: none;
        }
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0 0 0 10px;
        cursor: pointer;
        .plus {
          width: 14px;
        }
      }
    }
  }
`;

const AddModalTag = ({
  form,
  setForm,
}: {
  form: ModalProps;
  setForm: (form: ModalProps) => void;
}) => {
  const [lenTag, setLenTag] = useState(0);
  const [tagName, setTagName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTagName(value);
  };
  const newForm = { ...form };
  const addTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newForm.tag!.length <= 4) {
      newForm.tag!.push(tagName);
    }
    setForm(newForm);
    setTagName("");
    setLenTag(newForm.tag!.length);
  };
  const removeTag = (index: number) => {
    newForm.tag!.splice(index, 1);
    setForm(newForm);
    setLenTag(newForm.tag!.length);
  };
  return (
    <TagContainer>
      <div className="header">
        <Text size="medium" weight="medium">
          활동 태그
        </Text>
      </div>
      <Tags>
        <div className="tagBox">
          {form.tag?.map((tag, index) => (
            <div className="existTag" key={tag}>
              <Text size="medium" weight="medium" color="white">
                {tag}
              </Text>
              <button className="btn">
                <img
                  className="minus"
                  src={removeIcon}
                  alt="remove"
                  onClick={() => {
                    removeTag(index);
                  }}
                />
              </button>
            </div>
          ))}
          {lenTag < 5 && (
            <form className="addTag" onSubmit={addTag}>
              <input
                type="text"
                className="input"
                placeholder="추가하기"
                minLength={2}
                maxLength={8}
                onChange={onChange}
                value={tagName}
              />
              <button className="btn" type="button">
                <img className="plus" src={addIcon} alt="add" />
              </button>
            </form>
          )}
        </div>
      </Tags>
    </TagContainer>
  );
};

export default AddModalTag;
