import React, { Fragment, PropsWithChildren } from 'react';
import Links from './Links';

const TitleFooter = ({ children }: PropsWithChildren) => {
  return <h4 className="text-h4 text-fontFooter">{String(children).toUpperCase()}</h4>;
};

const Components = {
  titleFooter: TitleFooter,
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
