import styled from "@emotion/styled";
import { Link } from "react-router-dom";
interface LinkProps {
  size: "h1" | "h2" | "h3" | "h4" | "xlarge" | "large" | "medium" | "small";
  weight?: "bold" | "medium" | "regular" | "light" | "thin";
  color?: "primary" | "secondary" | "warning" | "highlight" | "block";
  children: React.ReactNode;
  url: string;
}

const AtomLink = (linkProps: LinkProps) => {
  const Component = styled(Link)`
    font-size: ${(props) => props.theme.font.size[linkProps.size]}px;
    font-weight: ${(props) =>
      props.theme.font.weight[linkProps.weight ?? "regular"]};
    color: ${(props) => props.theme.font.color[linkProps.color ?? "primary"]};
  `;
  return <Component to={linkProps.url}>{linkProps.children}</Component>;
};

export default AtomLink;
