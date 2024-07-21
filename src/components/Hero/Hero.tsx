import React, { PropsWithChildren } from 'react';
import Hero from '.';

interface HeroComponentProps {
  blocks: Block[];
}

const HeroComponent = ({ blocks }: PropsWithChildren<HeroComponentProps>) => {
  return (
    <div id="Hero">
      {blocks.map(block =>
        block.contentProperties?.map(prop => {
          return <Hero.Content {...prop} />;
        })
      )}
    </div>
  );
};

export default HeroComponent;
