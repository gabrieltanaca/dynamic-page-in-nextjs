import React from 'react';
import Footer from '.';

interface FooterProps {
  blocks: Block[];
}

const FooterComponent = ({ blocks }: FooterProps) => {
  return (
    <div id="footer">
      {blocks.map(block =>
        block.contentProperties?.map(content => {
          const contentBlocks = content.value.blocks;

          if (contentBlocks) {
            return (
              <div>
                {contentBlocks.map(footerBlock =>
                  footerBlock.contentProperties?.map(footerContent => {
                    return <Footer.Content {...footerContent} />;
                  })
                )}
              </div>
            );
          }
          return <span></span>;
        })
      )}
    </div>
  );
};

export default FooterComponent;
