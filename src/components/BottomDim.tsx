import { motion } from 'framer-motion';
import type { PropsWithStrictChildren } from '../type';

export default function BottomDim({ children }: PropsWithStrictChildren) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='fixed inset-x-0 top-0 z-bottomDim mx-auto h-screen w-screen max-w-[430px] bg-[rgba(0,0,0,0.6)]'
    >
      {children}
    </motion.div>
  );
}
