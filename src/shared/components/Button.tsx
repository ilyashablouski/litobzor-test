import { FC } from 'react';

interface IButtonProps {
  type?: 'submit' | 'button';
  text?: string;
  icon?: React.ReactNode | string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ type, text, icon, onClick }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {icon} {text}
    </button>
  );
};

export default Button;
