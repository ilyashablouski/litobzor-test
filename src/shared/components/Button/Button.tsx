import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  type?: 'submit' | 'button';
  variant?: 'basic' | 'close';
  icon?: ReactNode | string;
  onClick?: () => void;
  w100?: boolean;
  children?: ReactNode | string;
}

const Button: FC<IButtonProps> = ({
  type = 'button',
  variant = 'basic',
  icon,
  onClick,
  w100 = false,
  children,
}) => {
  return (
    <button
      style={w100 ? { width: '100%', display: 'flex', justifyContent: 'center' } : {}}
      className={variant === 'close' ? styles.closeButton : styles.button}
      type={type}
      onClick={onClick}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
