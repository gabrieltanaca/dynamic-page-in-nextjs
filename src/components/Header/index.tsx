import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '@/assets/icons/FacebookIcon.svg';
import InstagramIcon from '@/assets/icons/InstagramIcon.svg';
import TwitterIcon from '@/assets/icons/TwitterIcon.svg';

interface HeaderProps {
  blocks: Block[];
}

const Header = ({ blocks }: HeaderProps) => {
  return (
    <div
      id="header"
      className="px-40"
    >
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
      <div>
        {blocks.map(block =>
          block.contentProperties?.map(content => {
            const links = content.value.links || [];
            return (
              <ul className="flex gap-3">
                {links.map(({ url, name }) => (
                  <Link
                    key={name}
                    href={url}
                    className='text-lg'
                  >
                    {name}
                  </Link>
                ))}
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Header;
