import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLElement>;
};

export default function Hover({ children, ref }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      initial={false}
    >
      {children}
    </motion.div>
  );
}
