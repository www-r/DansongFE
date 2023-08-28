import styled from '@emotion/styled';
import { motion, HTMLMotionProps } from 'framer-motion';

type TextlineProps = HTMLMotionProps<'span'> & {
  fontSize: number;
  color?: string;
  isFontBold?: boolean;
  marginBottom?: string;
};

export const Textline = styled(motion.span)<TextlineProps>`
  display: block;
  margin-bottom: ${props => props.marginBottom};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => (props.isFontBold ? '900' : 'normal')};
  color: ${props => props.color};

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    font-size: ${props => props.fontSize * 0.65}rem;
  }
`;
