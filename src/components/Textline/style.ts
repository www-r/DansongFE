import styled from '@emotion/styled';
import { motion, HTMLMotionProps } from 'framer-motion';

type TextlineProps = HTMLMotionProps<'span'> & {
  fontSize?: string;
  color?: string;
  isFontBold?: boolean;
  marginBottom?: string;
};

export const Textline = styled(motion.span)<TextlineProps>`
  display: block;
  margin-bottom: ${props => props.marginBottom};
  font-size: ${props => props.fontSize || '16rem'};
  font-weight: ${props => (props.isFontBold ? 'bold' : 'normal')};
  color: ${props => props.color};
`;
