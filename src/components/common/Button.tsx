import React from "react";
import styled from "@emotion/styled";

interface ButtonPorps {
  /**
   * @default "100px"
   */
  width?: string;
  /**
   * @default "40px"
   */
  height?: string;
  /**
   * @default 'medium'
   * @props fontSize medium: 14px
   * @props fontSize xxlarge: 20px
   */
  fontSize?: "medium" | "xxlarge";
  /**
   * @default 'medium'
   */
  fontWeight?: "medium" | "bold";
  /**
   * @default 'white'
   */
  color?: "white" | "black";
  /**
   * @default 'purple'
   */
  backgroundColor?: "black" | "block";
  /**
   * @default 'default'
   * @props radius default: 10px
   * @props radius min: 5px
   * @props radius max: 20px
   */
  radius?: "min" | "default" | "max";
  /**
   * @default 'button'
   */
  type?: "submit";
  /**
   * @default 'none'
   * @description Apply onClick event to the button
   */
  onClick?: () => void;
  hoverBgColor?: "purple" | "black" | "block";
  hoverColor?: "white" | "black";
  children: React.ReactNode;
}

/**
 * @param width
 * @param height
 * @param fontSize
 * @param fontWeight
 * @param color
 * @param backgroundColor
 * @param radius
 * @param type
 * @param onClick
 * @param children
 * @returns JSX.Element
 */
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
  hoverBgColor,
  hoverColor,
  children,
}: ButtonPorps) => {
  const Component = styled.button`
    width: ${width ?? "100px"};
    height: ${height ?? "40px"};
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
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) =>
        !hoverColor ? color : theme.font.color[hoverColor]};
      background-color: ${({ theme }) =>
        !hoverBgColor ? backgroundColor : theme.background[hoverBgColor]};
    }
  `;
  return (
    <Component type={type === "submit" ? "submit" : "button"} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Button;
