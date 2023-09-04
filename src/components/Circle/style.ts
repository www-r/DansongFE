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
    width: 7rem;
    height: 7rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      width: 4rem;
      height: 4rem;
    }
  }
  &.medium {
    width: 12rem;
    height: 12rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      width: 6rem;
      height: 6rem;
    }
  }
  &.large {
    width: 18rem;
    height: 18rem;

    @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
      width: 10rem;
      height: 10rem;
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
