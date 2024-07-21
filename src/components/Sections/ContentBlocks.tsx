import React, { Fragment } from 'react';
import ContentImage from './ContentImage';
import WidgetCapture from './WidgetCapture';

const Components = {
  contentImage: ContentImage,
  widgetCapture: WidgetCapture,
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const ContentBlocks = ({ contentAlias = 'default', contentProperties = [] }: Block) => {
  const Component = Components?.[contentAlias as ComponentsKey] || Components.default;
  return <Component properties={contentProperties} />;
};

export default ContentBlocks;
