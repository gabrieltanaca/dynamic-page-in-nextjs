import React, { PropsWithChildren } from 'react';

const Divider = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full border-b-2 border-dashed border-fontGray flex items-center justify-center py-2 ">
      <span className="text-fontGray absolute bottom-[-0.75rem] bg-white">{children}</span>
    </div>
  );
};

export default Divider;
