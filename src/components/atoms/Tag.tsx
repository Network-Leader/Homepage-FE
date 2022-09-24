import React from "react";
import styled from "@emotion/styled";

interface TagPorps {
  padding?: "min" | "max";
  fontSize?: "small" | "xlarge" | "xxlarge";
  fontWeight?: "bold";
  color?: "black" | "highlight";
  backgroundColor?: "block" | "purple" | "lightpurple" | "purpleopacity";
  radius?: "min";
  icon?: "add" | "remove";
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
  icon,
  onClick,
  children,
}: TagPorps) => {
  const Component = styled.span`
    min-width: 10px;
    padding: ${!padding
      ? "4px 12px"
      : padding === "min"
      ? "4px 5px"
      : "4px 20px"};
    border-radius: ${({ theme }) =>
      !radius ? theme.borderRadius.default : theme.borderRadius.min};
    font-size: ${({ theme }) =>
      !fontSize ? theme.font.size.medium : theme.font.size[fontSize]}px;
    font-weight: ${({ theme }) =>
      fontWeight === "bold" ? fontWeight : theme.font.weight.medium};
    color: ${({ theme }) =>
      !color ? theme.font.color.white : theme.font.color[color]};
    background-color: ${({ theme }) =>
      !backgroundColor
        ? theme.background.black
        : backgroundColor === "purpleopacity"
        ? `rgba(153, 137, 247, 0.1)`
        : theme.background[backgroundColor]};
  `;
  return (
    <Component onClick={onClick}>
      {icon === "add" ? (
        <>
          <span>
            {children}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Noun_project_-_plus_round.svg/1200px-Noun_project_-_plus_round.svg.png"
              alt="add"
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            />
          </span>
        </>
      ) : icon === "remove" ? (
        <>
          <span>
            {children}
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/subtract-6-451501.png"
              alt="remove"
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            />
          </span>
        </>
      ) : (
        children
      )}
    </Component>
  );
};

export default Tag;
