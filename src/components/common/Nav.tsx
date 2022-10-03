import styled from "@emotion/styled";
import { Link } from "react-router-dom";
interface LinkProps {
  /**
   * @default "large"
   * @props "medium"
   */
  size?: "h1" | "h2" | "h3" | "h4" | "xlarge" | "large" | "medium" | "small";
  /**
   * @default "bold"
   */
  weight?: "bold";
  /**
   * @default "black"
   * @props "white"
   * @props "highlight"
   */
  color?: "black" | "white" | "highlight";
  children: React.ReactNode;
  url: string;
}

const Nav = (props: LinkProps) => {
  const Component = styled(Link)`
    font-size: ${({ theme }) => theme.font.size[props.size ?? "large"]}px;
    font-weight: ${({ theme }) => theme.font.weight[props.weight ?? "bold"]};
    color: ${({ theme }) => theme.font.color[props.color ?? "black"]};
  `;
  return <Component to={props.url}>{props.children}</Component>;
};

export default Nav;
