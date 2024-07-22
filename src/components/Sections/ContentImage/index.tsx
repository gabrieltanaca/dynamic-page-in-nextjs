import React from 'react';
import Content from './Content';
import { filterPropertiesByAlias, getMediaItemsByAlias } from '@/utils/dynamicPageUtils';
import UI from '@/components/UI';

interface ContentImageProps {
  properties: ContentProperty[];
}

const ContentImage = ({ properties }: ContentImageProps) => {
  const mediaItem = getMediaItemsByAlias(properties);
  const filteredProperties = filterPropertiesByAlias(properties);

  return (
    <UI.Container
      id="content-image"
      className="w-full grid grid-cols-2 px-0"
    >
      <div className="bg-transparent pl-40 pr-16">
        {filteredProperties.map(prop => {
          return <Content {...prop} />;
        })}
      </div>
      <img
        src={mediaItem?.url}
        alt={String(mediaItem?.altText)}
      />
    </UI.Container>
  );
};

export default ContentImage;
