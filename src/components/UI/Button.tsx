import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: JSX.Element;
  iconposition?: 'left' | 'right';
}

const Button = (props: ButtonProps) => {
  const { className, title, icon, iconposition = 'left' } = props;

  return (
    <button
      {...props}
      className={`${className} border-2 border-borderGray py-4 flex justify-center items-center gap-2`}
    >
      {iconposition === 'left' && icon && <span>{icon}</span>}
      {title && <span>{title}</span>}
      {iconposition === 'right' && icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
