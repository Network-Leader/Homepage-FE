import styled from "@emotion/styled";

interface TextProps {
  size: "h1" | "h2" | "h3" | "h4" | "xlarge" | "large" | "medium" | "small";
  weight?: "bold" | "medium" | "regular" | "light" | "thin";
  color?:
    | "black"
    | "white"
    | "grey"
    | "warning"
    | "highlight"
    | "block"
    | "foot"
    | "blackopacity";
  lineheight?: string;
  children: React.ReactNode;
}

const Text = (textProps: TextProps) => {
  const Component = styled[
    textProps.size === "h1" ||
    textProps.size === "h2" ||
    textProps.size === "h3" ||
    textProps.size === "h4"
      ? textProps.size
      : "p"
  ]`
    font-size: ${(props) => props.theme.font.size[textProps.size]}px;
    font-weight: ${(props) =>
      props.theme.font.weight[textProps.weight ?? "regular"]};
    color: ${(props) => props.theme.font.color[textProps.color ?? "black"]};
    line-height: ${textProps.lineheight};
  `;
  return <Component>{textProps.children}</Component>;
};

export default Text;
