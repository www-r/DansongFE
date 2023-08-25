import React, { CSSProperties } from 'react';

import * as S from './style';
import { HTMLMotionProps } from 'framer-motion';

type Props = {
  size: 'small' | 'medium' | 'large';
  bgColor?: string;
  isBoxShadow?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
} & HTMLMotionProps<'div'>;

export default function Circle({ size, bgColor, children, isBoxShadow = false, style }: Props) {
  return (
    <S.Container className={size} bgColor={bgColor} isBoxShadow={isBoxShadow} style={style}>
      {children}
    </S.Container>
  );
}
