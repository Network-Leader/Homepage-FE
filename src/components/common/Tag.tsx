import React from "react";
import styled from "@emotion/styled";

interface TagPorps {
  /**
   * @default "medium"
   */
  padding?: "min" | "medium" | "large" | "max";
  /**
   * @default 'medium'
   * @props fontSize small: 12px
   * @props fontSize medium: 14px
   * @props fontSize xlarge: 18px
   * @props fontSize xxlarge: 20px
   */
  fontSize?: "small" | "medium" | "xlarge" | "xxlarge";
  /**
   * @default 'medium'
   */
  fontWeight?: "medium" | "bold";
  /**
   * @default 'black'
   */
  color?: "white" | "black" | "highlight" | "blue";
  /**
   * @default 'black'
   */
  backgroundColor?:
    | "black"
    | "block"
    | "purple"
    | "lightpurple"
    | "purpleopacity"
    | "blue"
    | "blueopacity";
  /**
   * @default 'default'
   * @props radius default: 10px
   * @props radius min: 5px
   */
  radius?: "default" | "min";
  /**
   * @default 'none'
   */
  icon?: "add" | "remove";
  /**
   * @default 'none'
   * @description Apply onClick event to the tag
   */
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
/**
 *
 * @param padding
 * @param fontSize
 * @param fontWeight
 * @param color
 * @param backgroundColor
 * @param radius
 * @param icon
 * @param onClick
 * @param onMouseOver
 * @param onMouseLeave
 * @param children
 * @returns JSX.Element
 */
const Tag = ({
  padding,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  radius,
  icon,
  onClick,
  className,
  children,
}: TagPorps) => {
  const Component = styled.span`
    min-width: 10px;
    padding: ${!padding
      ? "8px 12px"
      : padding === "min"
      ? "4px 5px"
      : padding === "max"
      ? "4px 20px"
      : "8px 25px"};
    border-radius: ${({ theme }) => theme.borderRadius[radius ?? "default"]};
    font-size: ${({ theme }) => theme.font.size[fontSize ?? "medium"]}px;
    font-weight: ${({ theme }) => theme.font.weight[fontWeight ?? "medium"]};
    color: ${({ theme }) => theme.font.color[color ?? "black"]};
    background-color: ${({ theme }) =>
      theme.background[backgroundColor ?? "purple"]};
  `;
  return (
    <Component onClick={onClick} className={className}>
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
