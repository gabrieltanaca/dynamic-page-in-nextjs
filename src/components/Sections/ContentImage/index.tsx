import React from 'react';
import Content from './Content';

interface ContentImageProps {
  properties: ContentProperty[];
}

const ContentImageComponent = ({ properties }: ContentImageProps) => {
  return (
    <div>
      {properties.map(prop => {
        return <Content {...prop} />;
      })}
    </div>
  );
};

export default ContentImageComponent;
