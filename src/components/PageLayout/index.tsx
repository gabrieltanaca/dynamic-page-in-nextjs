import React, { Fragment } from 'react';
import Sections from '../Sections';
import Hero from '../Hero';

const Components = {
  sections: Sections.Component,
  hero: Hero.Component,
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const PageLayout = ({ value }: Property) => {
  const alias = value.alias || 'default';
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  return <Component blocks={value?.blocks || []} />;
};

export default PageLayout;
