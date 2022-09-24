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
    border-radius: ${({ theme }) =>
      radius === "min"
        ? theme.borderRadius.min
        : radius === "max"
        ? theme.borderRadius.max
        : theme.borderRadius.default};
    font-size: ${({ theme }) =>
      !fontSize ? theme.font.size.medium : theme.font.size[fontSize]}px;
    font-weight: ${({ theme }) =>
      !fontWeight ? theme.font.weight.medium : theme.font.weight[fontWeight]};
    color: ${({ theme }) =>
      !color ? theme.font.color.white : theme.font.color[color]};
    background-color: ${({ theme }) =>
      !backgroundColor
        ? theme.background.purple
        : theme.background[backgroundColor]};
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
