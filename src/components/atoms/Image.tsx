import styled from '@emotion/styled';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  shape?: 'circle' | 'rounded' | 'square';
  display?: 'block' | 'inline' | 'inline-block';
  float?: 'left' | 'right' | 'block';
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  children?: React.ReactNode;
}

function Image(props: ImageProps) {
  const Component = styled.img`
    width: ${props.width ?? 'auto'};
    height: ${props.height ?? 'auto'};
    borderradius: ${props.shape === 'circle'} ? '50%' : ${props.shape === 'rounded'} ? '10px' : '0';
    display: ${props.display ?? 'inline'};
    float: ${props.float ?? 'block'};
    object-fit: ${props.fit ?? 'cover'};
  `;
  return <Component src={props.src} alt={props.alt} />;
}

export default Image;
