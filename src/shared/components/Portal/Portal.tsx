'use client';

import { FC, ReactNode, RefObject, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  container?: RefObject<HTMLElement>;
}

export const Portal: FC<IPortalProps> = ({ children, container }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(children, container?.current || document.body);
};

export default Portal;
