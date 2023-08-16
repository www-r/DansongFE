import styled from '@emotion/styled';

import { motion, HTMLMotionProps } from 'framer-motion';

type TextlineProps = HTMLMotionProps<'span'> & {
  fontSize?: string;
  color?: string;
  isFontBold?: boolean;
};

export const Textline = styled(motion.span)<TextlineProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props => props.fontSize || '16rem'};
  font-weight: ${props => (props.isFontBold ? 'bold' : 'normal')};
  color: ${props => props.color};
`;
