import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

export default function Hover({ children }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.7 },
      }}
      whileTap={{ scale: 1 }}
      initial={false}
    >
      {children}
    </motion.div>
  );
}
