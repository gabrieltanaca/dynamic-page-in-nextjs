import React, { Fragment } from 'react';
import HeroImage from './HeroImage';

const Components = {
  overline: 'h3',
  title: 'h1',
  description: 'p',
  image: HeroImage,
  altText: 'span',
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const Content = ({ alias = 'default', value }: ContentProperty) => {
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  return (
    <Component mediaItems={value.mediaItems || []}>{value.value || value.sourceValue}</Component>
  );
};

export default Content;
