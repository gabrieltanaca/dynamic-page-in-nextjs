import { Fragment, PropsWithChildren } from 'react';

interface TextProps {
  alias?: string;
}

const Text = ({ children, alias }: PropsWithChildren<TextProps>) => {
  switch (alias) {
    case 'overline':
      return (
        <h4 className="text-h4 text-fontGray font-normal">{String(children).toUpperCase()}</h4>
      );
    case 'title':
      return <h2 className="text-h2/none max-md:text-6xl">{children}</h2>;
    case 'description':
      return <p className="text-2xl max-md:text-lg max-md:leading-5 max-md:mt-2">{children}</p>;

    default:
      return <Fragment />;
  }
};

export default Text;
