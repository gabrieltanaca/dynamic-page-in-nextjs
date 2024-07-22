import React from 'react';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import Link from 'next/link';

const Top = () => {
  return (
    <div className="flex pt-7 max-md:py-5 justify-between items-center">
      <h4 className="text-xl font-extrabold tracking-tighter">LOREM IPSUM</h4>
      <div className="flex gap-4 max-md:hidden">
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

export default Top;
