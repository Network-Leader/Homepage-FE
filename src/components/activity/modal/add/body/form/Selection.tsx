import { useRef, useState } from "react";
import { ModalProps } from "../../..";
import tri_gray from "../../../../../../assets/GUIicon/tri_gray.png";
import tri_purple from "../../../../../../assets/GUIicon/tri_purple.png";
import Dropdown from "./Dropdown";

const Selection = ({
  form,
  setForm,
  name,
}: {
  form: ModalProps;
  setForm: (form: ModalProps) => void;
  name: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onFocus = () => {
    setIsFocus(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 120);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  const onClick = () => {
    isFocus ? onBlur() : onFocus();
  };
  const focusStyle = isFocus
    ? {
        border: "1px solid #5F3DC4",
        transition: "all 0.1s linear",
      }
    : {
        border: "1px solid #dcdcdc",
        transition: "all 0.1s linear",
      };
  return (
    <>
      <input
        className="selectInput"
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className="select" ref={divRef} style={focusStyle}>
        {name === "제한 인원수"
          ? form.limit === 0
            ? name
            : form.limit
          : form.generation === 0
          ? name
          : form.generation}
        {isFocus ? (
          <span className="selectIcon" onClick={onClick}>
            <img src={tri_purple} alt="tri_purple" className="tri" />
          </span>
        ) : (
          <span className="selectIcon" onClick={onClick}>
            <img src={tri_gray} alt="tri_gray" className="tri" />
          </span>
        )}
        {isFocus && <Dropdown name={name} form={form} setForm={setForm} />}
      </div>
    </>
  );
};

export default Selection;
