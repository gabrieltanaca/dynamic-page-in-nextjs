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
      className="!py-0 max-md:grid max-md:grid-cols-2"
    >
      <Header.Top />
      <Header.NavHeader blocks={blocks} />
      <Header.NavMobileHeader blocks={blocks} />
    </UI.Container>
  );
};

export default HeaderComponent;
