import React, { PropsWithChildren } from 'react';
import Hero from '.';
import { filterPropertiesByAlias, getMediaItemsByAlias } from '@/utils/dynamicPageUtils';
import uuid from '@/utils/uuid';

interface HeroComponentProps {
  blocks: Block[];
}

const HeroComponent = ({ blocks }: PropsWithChildren<HeroComponentProps>) => {
  const properties = blocks[0].contentProperties || [];

  const mediaItem = getMediaItemsByAlias(properties);
  const filteredProperties = filterPropertiesByAlias(properties);

  return (
    <div
      id="hero"
      className={`relative w-full h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url('${mediaItem.url}')` }}
    >
      <div className="absolute bg-white right-0 bottom-[2rem] w-[34rem] h-[28rem] p-8 mr-40 ">
        {filteredProperties?.map(prop => {
          return (
            <Hero.Content
              key={uuid()}
              {...prop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroComponent;
