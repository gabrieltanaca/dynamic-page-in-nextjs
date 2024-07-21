import React, { PropsWithChildren } from 'react';

interface ContentImageProps {
  mediaItems: MediaItem[];
}

const SectionImage = ({ mediaItems }: PropsWithChildren<ContentImageProps>) => {
  return (
    <div>
      {mediaItems?.map(({ url }) => (
        <img
          src={url}
          alt="sectionImage"
        />
      ))}
    </div>
  );
};

export default SectionImage;
