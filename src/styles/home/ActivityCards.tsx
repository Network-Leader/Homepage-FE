import styled from '@emotion/styled';

export const ActivityImageBox = styled('div')(
  {
    position: 'absolute',
    overflow: 'hidden',
    transition: '0.5s ease',
  },
  (props) => ({
    width: props.width,
    height: props.height,
  }),
);

export const ActivityContentBox = styled('div')`
  position: absolute;
  width: ${({ width }) => width};
  height: 0;
  overflow: hidden;
  color: ${({ color }) => color};

  transition: 0.5s ease;
`;

export const ActivityCardBox = styled('div')`
  position: relative;
  width: ${({ width }) => Number(width ?? 0) + 100};
  height: ${({ height }) => Number(height ?? 0) + 100};
  background-color: red;

  &:hover {
    ${ActivityImageBox} {
      height: 0;
    }
    ${ActivityContentBox} {
      height: ${({ style }) => style?.height};
    }
  }
`;
