import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  type?: 'submit' | 'button';
  variant?: 'basic' | 'close';
  icon?: ReactNode | string;
  onClick?: () => void;
  children?: ReactNode | string;
}

const Button: FC<IButtonProps> = ({ type = 'button', variant = 'basic', icon, onClick, children }) => {
  return (
    <button
      className={variant === 'close' ? styles.closeButton : styles.button}
      type={type}
      onClick={onClick}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
