import { Fragment, PropsWithChildren } from 'react';

interface TextProps {
  alias?: string;
}

const Text = ({ children, alias }: PropsWithChildren<TextProps>) => {
  switch (alias) {
    case 'overline':
      return (
        <h4 className="text-h4 text-fontGray font-normal pb-3">{String(children).toUpperCase()}</h4>
      );
    case 'title':
      return <h3 className="text-mobileTitle/none pb-2">{children}</h3>;
    case 'description':
      return <p className="text-lg">{children}</p>;

    default:
      return <Fragment />;
  }
};

export default Text;
