import React, { CSSProperties } from 'react';

import * as S from './style';
import { HTMLMotionProps } from 'framer-motion';

type Props = {
  size: 'small' | 'medium' | 'large';
  bgColor?: string;
  children: React.ReactNode;
  style?: CSSProperties;
} & HTMLMotionProps<'div'>;

export default function Circle({ size, bgColor, children, style }: Props) {
  return (
    <S.Container className={size} bgColor={bgColor} style={style}>
      {children}
    </S.Container>
  );
}
