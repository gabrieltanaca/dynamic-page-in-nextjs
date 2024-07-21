import React from 'react';
import Content from './Content';
import Image from 'next/image';
import { filterPropertiesByAlias, getMediaItemsByAlias } from '@/utils/dynamicPageUtils';

interface ContentImageProps {
  properties: ContentProperty[];
}

const ContentImage = ({ properties }: ContentImageProps) => {
  const Components = {
    overline: 'h3',
    title: 'h1',
    description: 'p',
    altText: 'span',
  };

  const mediaItem = getMediaItemsByAlias(properties);
  const filteredProperties = filterPropertiesByAlias(properties);

  return (
    <div
      id="content-image"
      className="w-full grid grid-cols-2 py-16"
    >
      <div className="bg-transparent pl-40 pr-16">
        {filteredProperties.map(prop => {
          return <Content {...prop} />;
        })}
      </div>
      <div>
        <img
          src={mediaItem?.url}
          alt={String(mediaItem?.altText)}
        />
      </div>
    </div>
  );
};

export default ContentImage;
