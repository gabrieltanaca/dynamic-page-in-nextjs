import React from 'react';

const HamburguerMenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 16H36V18.6667H12V16ZM12 22.6667H36V25.3333H12V22.6667ZM12 29.3333H36V32H12V29.3333Z"
        fill={props.fill || '#212020'}
      />
    </svg>
  );
};

export default HamburguerMenuIcon;
