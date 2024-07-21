import React from 'react';

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.59 16.5917L13.17 12.0117L8.59 7.42172L10 6.01172L16 12.0117L10 18.0117L8.59 16.5917Z"
        fill={props.fill || '#221F20'}
      />
    </svg>
  );
};

export default ChevronRightIcon;
