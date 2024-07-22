import React from 'react';
import Dropdown from '../UI/Dropdown';
import uuid from '@/utils/uuid';

interface NavMobileHeaderProps {
  blocks: Block[];
}

const NavMobileHeader = ({ blocks }: NavMobileHeaderProps) => {
  return (
    <div className="md:hidden flex items-center justify-end">
      {blocks.map(block =>
        block.contentProperties?.map(content => {
          const links = content.value.links?.map(x => ({ label: x.name, href: x.url })) || [];

          return (
            <Dropdown
              key={uuid()}
              items={links}
            />
          );
        })
      )}
    </div>
  );
};

export default NavMobileHeader;
