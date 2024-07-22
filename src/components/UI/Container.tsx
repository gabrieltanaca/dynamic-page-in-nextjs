import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

const Container = (
  props: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
) => {
  const { children } = props;

  return (
    <div
      {...props}
      className={`${props.className} w-full px-40 py-16`}
    >
      {children}
    </div>
  );
};

export default Container;
