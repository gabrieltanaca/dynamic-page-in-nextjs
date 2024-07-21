import { Fragment, PropsWithChildren } from 'react';

interface TextProps {
  alias?: string;
}

const Text = ({ children, alias }: PropsWithChildren<TextProps>) => {
  switch (alias) {
    case 'overline':
      return <h4 className="text-h4 text-fontGray font-normal">{String(children).toUpperCase()}</h4>;
    case 'title':
      return <h2 className="text-h2/none">{children}</h2>;
    case 'description':
      return <p className="text-2xl">{children}</p>;

    default:
      return <Fragment />;
  }
};

export default Text;
