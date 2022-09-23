import React from "react";
import styled from "@emotion/styled";

interface ButtonPorps {
  width: string;
  height: string;
  fontSize?: "xxlarge";
  fontWeight?: "bold";
  color?: "black";
  backgroundColor?: "black" | "block";
  radius?: "min" | "max";
  type?: "submit";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  width,
  height,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  radius,
  type,
  onClick,
  children,
}: ButtonPorps) => {
  const Component = styled.button`
    width: ${width};
    height: ${height};
    border-radius: ${(props) =>
      radius === "min"
        ? props.theme.borderRadius.min
        : radius === "max"
        ? props.theme.borderRadius.max
        : props.theme.borderRadius.default};
    font-size: ${(props) =>
      !fontSize
        ? props.theme.font.size.medium
        : props.theme.font.size[fontSize]}px;
    font-weight: ${(props) =>
      !fontWeight
        ? props.theme.font.weight.medium
        : props.theme.font.weight[fontWeight]};
    color: ${(props) =>
      !color ? props.theme.font.color.white : props.theme.font.color[color]};
    background-color: ${(props) =>
      !backgroundColor
        ? props.theme.background.purple
        : props.theme.background[backgroundColor]};
    cursor: pointer;
    border: none;
  `;
  return (
    <Component type={type === "submit" ? "submit" : "button"} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;
