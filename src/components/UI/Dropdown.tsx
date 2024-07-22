import Link from 'next/link';
import React from 'react';
import HamburguerMenuIcon from '../../assets/icons/HamburguerMenuIcon';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import uuid from '@/utils/uuid';

interface DropdownProps {
  items: DropdownItem[];
}

interface DropdownItem {
  href: string;
  label: string;
}

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <Menu as="div">
      <MenuButton>
        <HamburguerMenuIcon />
      </MenuButton>
      <MenuItems
        transition
        className={
          'flex flex-col gap-3 absolute right-6 z-10 mt-2 origin-top-right border-2 border-borderGray p-4 transition shadow-lg bg-white' +
          ' data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
        }
      >
        {items.map(({ label, href }) => (
          <MenuItem key={uuid()}>
            <Link
              href={href}
              className="text-h4 max-md:border-b-2 max-md:border-borderGray"
            >
              {label}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
