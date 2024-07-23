import React from 'react';
import Content from './Content';
import { filterPropertiesByAlias, getMediaItemsByAlias } from '@/utils/dynamicPageUtils';
import UI from '@/components/UI';
import uuid from '@/utils/uuid';
import Image from 'next/image';

interface ContentImageProps {
  properties: ContentProperty[];
}

const ContentImage = ({ properties }: ContentImageProps) => {
  const mediaItem = getMediaItemsByAlias(properties);
  const filteredProperties = filterPropertiesByAlias(properties);

  return (
    <UI.Container
      id="content-image"
      className="w-full grid md:grid-cols-2 !px-0 py-12"
    >
      <div className="pl-40 pr-16 max-md:p-0 max-md:px-4 max-md:pb-4">
        {filteredProperties.map(prop => {
          return (
            <Content
              key={uuid()}
              {...prop}
            />
          );
        })}
        <button
          type="button"
          className="md:hidden text-3xl font-bold float-right pr-4"
        >
          +
        </button>
      </div>
      <img
        src={mediaItem?.url}
        alt={String(mediaItem?.altText)}
      />
    </UI.Container>
  );
};

export default ContentImage;
