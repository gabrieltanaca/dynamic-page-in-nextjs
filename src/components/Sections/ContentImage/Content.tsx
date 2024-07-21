import React, { Fragment } from 'react';
import Text from './Text';

const Components = {
  overline: Text,
  title: Text,
  description: Text,
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const Content = ({ alias = 'default', value }: ContentProperty) => {
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  return <Component alias={alias}>{value.value || value.sourceValue}</Component>;
};

export default Content;
