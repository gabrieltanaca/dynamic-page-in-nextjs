import React from 'react';
import Header from '.';
import UI from '../UI';

interface HeaderProps {
  blocks: Block[];
}

const HeaderComponent = ({ blocks }: HeaderProps) => {
  return (
    <UI.Container
      id="header"
      className="!py-0 max-md:flex max-md:justify-between"
    >
      <Header.Top />
      <Header.NavHeader blocks={blocks} />
      <Header.NavMobileHeader blocks={blocks} />
    </UI.Container>
  );
};

export default HeaderComponent;
