import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface HeaderProps {
  blocks: Block[];
}

const Header = ({ blocks }: HeaderProps) => {
  return (
    <div id="header">
      {blocks.map(block =>
        block.contentProperties?.map(content => {
          const links = content.value.links || [];
          return (
            <ul>
              {links.map(({ url, name }) => (
                <Link
                  key={name}
                  href={url}
                >
                  {name}
                </Link>
              ))}
            </ul>
          );
        })
      )}
    </div>
  );
};

export default Header;
