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
      className="w-full flex"
    >
      <div className="bg-transparent">
        {filteredProperties.map(prop => {
          return <Content {...prop} />;
        })}
      </div>
      <img
        src={mediaItem?.url}
        alt={String(mediaItem?.altText)}
      />
    </div>
  );
};

export default ContentImage;
