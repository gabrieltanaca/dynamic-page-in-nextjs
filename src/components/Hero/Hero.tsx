import React, { PropsWithChildren } from 'react';
import Hero from '.';
import { filterPropertiesByAlias, getMediaItemsByAlias } from '@/utils/dynamicPageUtils';

interface HeroComponentProps {
  blocks: Block[];
}

const HeroComponent = ({ blocks }: PropsWithChildren<HeroComponentProps>) => {
  const properties = blocks[0].contentProperties || [];

  const mediaItem = getMediaItemsByAlias(properties);
  const filteredProperties = filterPropertiesByAlias(properties);

  return (
    <div id="Hero">
      <div className="absolute bg-white right-0 bottom-[-10.5rem] w-[555px] h-[466px] p-8 mr-40 ">
        {filteredProperties?.map(prop => {
          return <Hero.Content {...prop} />;
        })}
      </div>
      <img
        src={mediaItem.url}
        alt={String(mediaItem.altText)}
        className="h-full bg-cover bg-center"
      />
    </div>
  );
};

export default HeroComponent;
