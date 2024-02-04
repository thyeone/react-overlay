import type { Meta, StoryObj } from '@storybook/react';
import { AnimatePortal } from '..';
import BottomSheet from '../components/BottomSheet';
import { useRef, useState } from 'react';

const meta: Meta<typeof AnimatePortal> = {
  title: 'AnimatePortal',
  component: AnimatePortal,
};

export default meta;

type Story = StoryObj<typeof AnimatePortal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)}>BottomSheet Button</button>
        <BottomSheet isOpen={isOpen} ref={ref}>
          <span>바텀시트 내용</span>
        </BottomSheet>
      </>
    );
  },
};
