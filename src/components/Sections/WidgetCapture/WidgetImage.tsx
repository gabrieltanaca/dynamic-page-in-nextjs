import React, { PropsWithChildren } from 'react';

interface ContentImageProps {
  mediaItems: MediaItem[];
}

const WidgetImage = ({ mediaItems }: PropsWithChildren<ContentImageProps>) => {
  return (
    <div>
      {mediaItems?.map(({ url }) => (
        <img
          src={url}
          alt="widgetImage"
        />
      ))}
    </div>
  );
};

export default WidgetImage;
