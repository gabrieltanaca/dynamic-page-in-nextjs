import React from 'react';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import Link from 'next/link';

const LeftSide = () => {
  return (
    <div className="flex pt-7 items-center gap-8 max-md:flex-col max-md:items-start max-md:pt-0">
      <h4 className="text-xl font-extrabold tracking-tighter">LOREM IPSUM</h4>
      <div className="flex gap-4">
        <Link href={'/'}>
          <InstagramIcon />
        </Link>
        <Link href={'/'}>
          <FacebookIcon />
        </Link>
        <Link href={'/'}>
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
