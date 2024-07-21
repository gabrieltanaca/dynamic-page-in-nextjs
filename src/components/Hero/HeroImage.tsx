import React, { PropsWithChildren } from 'react';

interface ContentImageProps {
  mediaItems: MediaItem[];
}

const HeroImage = ({ mediaItems }: PropsWithChildren<ContentImageProps>) => {
  return (
    <div>
      {mediaItems?.map(({ url }) => (
        <img
          src={url}
          alt="heroImage"
        />
      ))}
    </div>
  );
};

export default HeroImage;
