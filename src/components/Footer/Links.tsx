import uuid from '@/utils/uuid';
import Link from 'next/link';
import React from 'react';
import { PropsWithChildren } from 'react';

interface Links {
  links: Link[];
}

const Links = ({ links }: PropsWithChildren<Links>) => {
  return (
    <ul className="flex flex-col gap-4">
      {links.map(({ name, url }) => {
        return (
          <li key={uuid()}>
            <Link
              href={url}
              className="border-b border-solid border-borderGray text-base"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
