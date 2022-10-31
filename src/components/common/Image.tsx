import styled from "@emotion/styled";

interface ImageProps {
  src: string;
  alt: string;

  /**
   * @default 'auto'
   */
  width?: number;

  /**
   * @default 'auto'
   */
  height?: number;

  /**
   *  @default 'square'
   */
  shape?: "circle" | "rounded" | "square";

  /**
   * @default 'inline'
   */
  display?: "block" | "inline" | "inline-block";

  /**
   * @default 'block'
   */
  float?: "left" | "right" | "block";

  /**
   * @default 'cover'
   */
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  children?: React.ReactNode;
}

function Image(props: ImageProps) {
  const Component = styled.img`
    width: ${`${props.width}px` ?? "auto"};
    height: ${`${props.height}px` ?? "auto"};
    border-radius: ${props.shape === "circle"
      ? "50%"
      : props.shape === "rounded"
      ? "10px"
      : "0"};
    display: ${props.display ?? "inline"};
    float: ${props.float ?? "block"};
    object-fit: ${props.fit ?? "cover"};
  `;
  return <Component src={props.src} alt={props.alt} />;
}

export default Image;
