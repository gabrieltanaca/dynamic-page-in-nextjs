import Link from 'next/link';
import React from 'react';

interface NavHeaderProps {
  blocks: Block[];
}

const NavHeader = ({ blocks }: NavHeaderProps) => {
  return (
    <div className="py-3 max-md:hidden">
      {blocks.map(block =>
        block.contentProperties?.map(content => {
          const links = content.value.links || [];
          return (
            <ul className="flex gap-6">
              {links.map(({ url, name }) => (
                <Link
                  key={name}
                  href={url}
                  className="text-h4"
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

export default NavHeader;
