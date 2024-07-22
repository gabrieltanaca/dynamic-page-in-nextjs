import React from 'react';
import Footer from '.';

interface FooterProps {
  blocks: Block[];
}

const FooterComponent = ({ blocks }: FooterProps) => {
  return (
    <div
      id="footer"
      className="px-40 pt-16 pb-8 flex justify-around items-start"
    >
      <Footer.LeftSide />
      <div>
        {blocks.map(block =>
          block.contentProperties?.map(content => {
            const contentBlocks = content.value.blocks;

            if (contentBlocks) {
              return (
                <div className="flex gap-20">
                  {contentBlocks.map(footerBlock => {
                    return (
                      <div className="flex flex-col gap-4">
                        {footerBlock.contentProperties?.map(footerContent => (
                          <Footer.Content {...footerContent} />
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
    </div>
  );
};

export default FooterComponent;
