import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}

const Button = (props: ButtonProps) => {
  const { className, title, icon, iconPosition = 'left' } = props;

  return (
    <button
      {...props}
      className={`${className} border border-borderGray py-4 flex justify-center items-center gap-2`}
    >
      {iconPosition === 'left' && icon && <span>{icon}</span>}
      {title && <span>{title}</span>}
      {iconPosition === 'right' && icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
