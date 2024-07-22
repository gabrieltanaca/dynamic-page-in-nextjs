import React, { PropsWithChildren } from 'react';
import Sections from '.';
import uuid from '@/utils/uuid';

interface SectionsProps {
  blocks: Block[];
}

const SectionsComponent = ({ blocks }: PropsWithChildren<SectionsProps>) => {
  return (
    <div
      id="Sections"
      className="bg-white"
    >
      {blocks.map(block => {
        return (
          <Sections.ContentBlocks
            key={uuid()}
            {...block}
          />
        );
      })}
    </div>
  );
};

export default SectionsComponent;
