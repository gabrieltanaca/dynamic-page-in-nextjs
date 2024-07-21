import React, { PropsWithChildren } from 'react';
import Sections from '.';

interface SectionsProps {
  blocks: Block[];
}

const SectionsComponent = ({ blocks }: PropsWithChildren<SectionsProps>) => {
  return (
    <div id="Sections">
      {blocks.map(block => {
        return <Sections.ContentBlocks {...block}/>;
      })}
    </div>
  );
};

export default SectionsComponent;
