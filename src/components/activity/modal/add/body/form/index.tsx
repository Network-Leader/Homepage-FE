import styled from "@emotion/styled";
import { ModalProps } from "../../..";
import { ModalBodyContainer } from "../../../../../../styles/activity/modal/template";
import { Image, Text } from "../../../../../common";
import modal_icon from "../../../../../../assets/GUIicon/modal_icon.png";
import upload_icon from "../../../../../../assets/GUIicon/upload_icon.png";
import edit_icon from "../../../../../../assets/GUIicon/edit.png";
import { useEffect, useRef, useState } from "react";

const TextForm = styled.div`
  width: 490px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-indent: 5px;
    border: 1px solid #dcdcdc;
    border-radius: ${({ theme }) => theme.borderRadius.min};
    transition: all 0.2s linear;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.background.purple};
    }
  }
  .rowInputBox {
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: space-between;
    .rowInput {
      height: 67px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .row {
        width: 147px;
        height: 38px;
      }
    }
  }
  .inputBox {
    width: 100%;
    height: 67px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      width: 98.8%;
      height: 38px;
    }
  }
  .textArea {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .desc {
      width: 98.8%;
      height: 131px;
      resize: none;
      border: 1px solid #dcdcdc;
      border-radius: ${({ theme }) => theme.borderRadius.min};
      text-indent: 5px;
      transition: all 0.2s linear;
      &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.background.purple};
      }
    }
  }
`;

const ImgForm = styled.div<{ fileDataURL: string | null }>`
  width: 405px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .formBox {
    width: 100%;
    height: 291px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 5px 10px 5px;
    border: 1px solid
      ${({ theme, fileDataURL }) =>
        fileDataURL ? theme.background.purple : "#dcdcdc"};
    border-radius: ${({ theme }) => theme.borderRadius.min};
    .thumbnailPick {
      width: 100%;
      height: 245px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: ${({ theme }) => theme.borderRadius.min};
      background-color: rgba(0, 0, 0, 0.05);
      overflow: hidden;
      .preview {
        width: 120%;
      }
      .text {
        color: #dcdcdc;
        font-size: ${({ theme }) => theme.font.size.medium}px;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        margin: 5px 0 0 0;
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      align-items: center;
      .upload {
        font-size: ${({ theme }) => theme.font.size.small}px;
        font-weight: ${({ theme }) => theme.font.weight.medium};
        cursor: pointer;
        transition: all 0.1s linear;
        &:hover {
          color: ${({ theme }) => theme.background.purple};
        }
      }
    }
  }
`;

const AddActivityForm = ({
  form,
  setForm,
}: {
  form: ModalProps;
  setForm: (form: ModalProps) => void;
}) => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const newForm = { ...form };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInfo = e.target.files![0];
    if (fileInfo) {
      if (imageMimeType.test(fileInfo.type)) {
        setFile(fileInfo);
      } else {
        alert("이미지 파일만 업로드 가능합니다.");
      }
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...newForm, [name]: value });
  };
  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const { result } = e.target as any;
        if (result && !isCancel) {
          setFileDataURL(result);
          setForm({ ...newForm, thumbnail: result });
        }
      };
      reader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return (
    <ModalBodyContainer style={{ borderBottom: "none" }}>
      <TextForm>
        <div className="inputBox">
          <Text size="medium" weight="medium">
            활동 제목
          </Text>
          <input
            onChange={onChange}
            type="text"
            name="title"
            className="title"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="rowInputBox">
          <div className="rowInput">
            <Text size="medium" weight="medium">
              담당자
            </Text>
            <input
              onChange={onChange}
              className="row"
              name="leader"
              placeholder="홍길동"
            />
          </div>
          <div className="rowInput">
            <Text size="medium" weight="medium">
              분류
            </Text>
            <input
              className="row"
              name="classification"
              placeholder="분류를 선택하세요"
            />
          </div>
          <div className="rowInput">
            <Text size="medium" weight="medium">
              기수
            </Text>
            <input
              className="row"
              name="generation"
              placeholder="기수를 선택하세요"
            />
          </div>
        </div>
        <div className="textArea">
          <Text size="medium" weight="medium">
            활동 설명
          </Text>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              const { name, value } = e.target;
              setForm({ ...newForm, [name]: value });
            }}
            name="description"
            className="desc"
            placeholder="활동과 관련된 세부 설명을 입력하세요"
          />
        </div>
      </TextForm>
      <ImgForm fileDataURL={fileDataURL}>
        <Text size="medium" weight="medium">
          대표 이미지
        </Text>
        <div className="formBox">
          <div className="thumbnailPick">
            {fileDataURL ? (
              <Image
                src={fileDataURL}
                alt="thumbnail"
                width={405}
                height={265}
                fit="cover"
                display="inline-block"
                shape="rounded"
              />
            ) : (
              <>
                <img src={modal_icon} alt="modal_icon" className="icon" />
                <span className="text">Image Upload</span>
              </>
            )}
          </div>
          <div className="bottom">
            <img
              src={fileDataURL ? edit_icon : upload_icon}
              alt="upload_icon"
              style={{ marginRight: "5px", width: "15px" }}
            />
            <span
              className="upload"
              onClick={() => {
                ref.current?.click();
              }}
              style={fileDataURL ? { color: "#4A38F4" } : { color: "#dcdcdc" }}
            >
              {fileDataURL ? "대표 이미지 편집" : "이미지 찾기"}
            </span>
            <input
              type="file"
              ref={ref}
              onChange={handleFile}
              name="thumbnail"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </ImgForm>
    </ModalBodyContainer>
  );
};

export default AddActivityForm;
