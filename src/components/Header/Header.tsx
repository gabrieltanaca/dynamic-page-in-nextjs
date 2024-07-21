import Link from 'next/link';
import React from 'react';
import Header from '.';

interface HeaderProps {
  blocks: Block[];
}

const HeaderComponent = ({ blocks }: HeaderProps) => {
  return (
    <div
      id="header"
      className="px-40"
    >
      <Header.Top />
      <div className='py-3'>
        {blocks.map(block =>
          block.contentProperties?.map(content => {
            const links = content.value.links || [];
            return (
              <ul className="flex gap-3">
                {links.map(({ url, name }) => (
                  <Link
                    key={name}
                    href={url}
                    className="text-lg"
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

export default HeaderComponent;
