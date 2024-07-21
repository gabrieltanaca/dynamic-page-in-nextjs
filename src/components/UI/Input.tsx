import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = (props: InputProps) => {
  const { label, className } = props;
  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      <input
        {...props}
        className={`${className} border border-borderGray py-4 px-3`}
      />
    </div>
  );
};

export default Input;
