import React from 'react';
import Footer from '.';
import UI from '../UI';
import uuid from '@/utils/uuid';

interface FooterProps {
  blocks: Block[];
}

const FooterComponent = ({ blocks }: FooterProps) => {
  return (
    <UI.Container
      id="footer"
      className="pb-8 flex flex-col justify-between items-start max-md:gap-8"
    >
      <Footer.LeftSide />
      <div>
        {blocks.map(block =>
          block.contentProperties?.map(content => {
            const contentBlocks = content.value.blocks;

            if (contentBlocks) {
              return (
                <div
                  key={uuid()}
                  className={
                    'flex gap-20' +
                    ' max-md:grid max-md:grid-cols-2 max-md:grid-rows-1 max-md:gap-8 grid-flow-dense'
                  }
                >
                  {contentBlocks.map(footerBlock => {
                    return (
                      <div
                        key={uuid()}
                        className={'flex flex-col gap-4'}
                      >
                        {footerBlock.contentProperties?.map(footerContent => (
                          <Footer.Content
                            key={uuid()}
                            {...footerContent}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            }
            return <></>;
          })
        )}
      </div>
    </UI.Container>
  );
};

export default FooterComponent;
