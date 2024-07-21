import React, { Fragment } from 'react';
import Links from './Links';

const Components = {
  titleFooter: 'h1',
  linkFooter: Links,
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const Content = ({ value }: ContentProperty) => {
  const alias = value.alias || 'default';
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  return <Component links={value?.links || []}>{value.value}</Component>;
};

export default Content;
