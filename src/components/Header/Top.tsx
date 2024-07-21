import Image from 'next/image';
import React from 'react';
import FacebookIcon from '@/assets/icons/FacebookIcon.svg';
import InstagramIcon from '@/assets/icons/InstagramIcon.svg';
import TwitterIcon from '@/assets/icons/TwitterIcon.svg';

const Top = () => {
  return (
    <div className="flex pt-7 justify-between items-center">
      <h4 className="text-xl font-extrabold tracking-tighter">LOREM IPSUM</h4>
      <div className="flex gap-4">
        <Image
          src={InstagramIcon}
          alt="instagram"
        />
        <Image
          src={FacebookIcon}
          alt="facebook"
        />
        <Image
          src={TwitterIcon}
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default Top;
