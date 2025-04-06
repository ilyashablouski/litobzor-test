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
    document.body.style.marginRight = '0.4rem';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0';
    };
  }, []);

  return createPortal(children, container?.current || document.body);
};

export default Portal;
