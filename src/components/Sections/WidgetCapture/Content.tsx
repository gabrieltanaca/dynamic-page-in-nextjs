import React, { Fragment } from 'react';

const Components = {
  overline: 'h3',
  title: 'h1',
  description: 'p',
  socialLoginOptions: 'span',
  default: Fragment,
};

type ComponentsKey = keyof typeof Components;

const Content = ({ alias = 'default', value }: ContentProperty) => {
  const Component = Components?.[alias as ComponentsKey] || Components.default;
  const componentValue= value.value || value.sourceValue;
  
  if (typeof value.value === 'string') {
    return <Component>{componentValue}</Component>;
  }
};

export default Content;
