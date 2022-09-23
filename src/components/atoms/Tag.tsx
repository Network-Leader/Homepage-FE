import React from "react";
import styled from "@emotion/styled";

interface TagPorps {
  padding?: "medium";
  fontSize?: "small" | "xlarge" | "xxlarge";
  fontWeight?: "bold";
  color?: "black" | "highlight";
  backgroundColor?: "block" | "purple" | "lightpurple";
  radius?: "min";
  onClick?: () => void;
  children: React.ReactNode;
}

const Tag = ({
  padding,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  radius,
  onClick,
  children,
}: TagPorps) => {
  const Component = styled.span`
    padding: ${!padding ? "5px" : "4px 25px"};
    border-radius: ${(props) =>
      !radius
        ? props.theme.borderRadius.default
        : props.theme.borderRadius.min};
    font-size: ${(props) =>
      !fontSize
        ? props.theme.font.size.medium
        : props.theme.font.size[fontSize]}px;
    font-weight: ${(props) =>
      fontWeight === "bold" ? fontWeight : props.theme.font.weight.medium};
    color: ${(props) =>
      !color ? props.theme.font.color.white : props.theme.font.color[color]};
    background-color: ${(props) =>
      !backgroundColor
        ? props.theme.background.black
        : props.theme.background[backgroundColor]};
  `;
  return <Component onClick={onClick}>{children}</Component>;
};

export default Tag;
