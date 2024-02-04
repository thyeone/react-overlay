import { forwardRef } from 'react';
import BottomDim from './BottomDim';
import { motion } from 'framer-motion';
import type { PropsWithStrictChildren } from '../type';
import AnimatePortal from './AnimatePortal';

const BottomSheet = forwardRef<HTMLDivElement, PropsWithStrictChildren<{ isOpen: boolean }>>(
  ({ children, isOpen, ...rest }, ref) => {
    return (
      <AnimatePortal isOpen={isOpen}>
        <BottomDim>
          <motion.div
            className='absolute bottom-0 left-0 h-[464px] w-full max-w-[430px] rounded-t-2xl bg-white px-4 py-5'
            ref={ref}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              type: 'spring',
              damping: 40,
              stiffness: 350,
            }}
            variants={{
              visible: { y: '0%' },
              hidden: { y: '100%' },
            }}
            {...rest}
          >
            {children}
          </motion.div>
        </BottomDim>
      </AnimatePortal>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
