import { FC } from 'react';

interface IButtonProps {
  type?: 'submit' | 'button';
  text?: string;
  icon?: React.ReactNode | string;
  onClick?: () => void;
  children?: React.ReactNode | string;
}

const Button: FC<IButtonProps> = ({ type = 'button', icon, onClick, children }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {icon} {children}
    </button>
  );
};

export default Button;
