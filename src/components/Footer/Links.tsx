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
          <li>
            <Link
              key={name}
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
