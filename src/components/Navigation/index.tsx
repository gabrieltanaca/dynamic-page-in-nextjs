import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Components = {
  footers: Footer.Component,
  headers: Header.Component,
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const Navigation = ({ value }: Property) => {
  const alias = value.alias || 'default';
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  return <Component blocks={value?.blocks || []} />;
};

export default Navigation;
