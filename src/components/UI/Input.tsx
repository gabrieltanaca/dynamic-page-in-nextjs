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
        className={`${className} border-2 border-borderGray py-4 px-3 mt-2`}
      />
    </div>
  );
};

export default Input;
