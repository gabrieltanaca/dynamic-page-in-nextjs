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
      className={`relative w-full h-screen bg-cover bg-center max-md:border-y-[1rem] max-md:border-fontDark`}
      style={{ backgroundImage: `url('${mediaItem.url}')` }}
    >
      <div
        className={
          'absolute bg-white right-0 bottom-[2rem] w-[34rem] p-8 md:mr-40 break-words' +
          ' max-md:bottom-[1rem] max-md:w-72 max-md:p-4'
        }
      >
        {filteredProperties?.map(prop => {
          return (
            <Hero.Content
              key={uuid()}
              {...prop}
            />
          );
        })}
        <button
          type="button"
          className="text-4xl font-bold float-right"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
