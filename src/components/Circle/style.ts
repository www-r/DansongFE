import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = {
  bgColor?: string;
  isBoxShadow?: boolean;
};

export const Container = styled(motion.div)<Props>`
  border-radius: 50%;
  box-shadow: ${({ isBoxShadow, theme }) => (isBoxShadow ? theme.border.boxShadow : 'none')};
  border: 1px solid ${({ isBoxShadow, theme }) => (isBoxShadow ? 'none' : theme.colors.border)};
  background-color: ${({ bgColor }) => bgColor};
  position: relative;

  &.small {
    min-width: 7rem;
    min-height: 7rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      min-width: 4rem;
      min-height: 4rem;
    }
  }
  &.medium {
    min-width: 12rem;
    min-height: 12rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      min-width: 6rem;
      min-height: 6rem;
    }
  }
  &.large {
    min-width: 18rem;
    min-height: 18rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      min-width: 10rem;
      min-height: 10rem;
    }
  }

  & > div {
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
