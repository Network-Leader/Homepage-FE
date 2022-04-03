import React from 'react';
import { _H3 } from '../../styles/common';

interface H3Props {
  center?: boolean;

  children?: React.ReactNode;
}

const H3 = ({ center, children }: H3Props) => (
  <_H3 style={{ textAlign: center ? 'center' : 'left' }}>{children}</_H3>
);

export default H3;
