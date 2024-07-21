import Link from 'next/link';
import React from 'react';
import { PropsWithChildren } from 'react';

interface Links {
  links: Link[];
}

const Links = ({ links }: PropsWithChildren<Links>) => {
  return (
    <ul>
      {links.map(({ name, url }) => {
        return (
          <Link
            key={name}
            href={url}
          >
            {name}
          </Link>
        );
      })}
    </ul>
  );
};

export default Links;
