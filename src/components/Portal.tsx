import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PropsWithStrictChildren } from '../type';

export default function Portal({ children }: PropsWithStrictChildren) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, []);

  if (!container) return null;

  return createPortal(children, document.body);
}
