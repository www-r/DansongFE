import styled from '@emotion/styled';
import { motion, HTMLMotionProps } from 'framer-motion';

type HoverProps = HTMLMotionProps<'img'> & {};

export const Hover = styled(motion.img)<HoverProps>``;
