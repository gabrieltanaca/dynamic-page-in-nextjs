import React from 'react';
import Content from './Content';
import { filterPropertiesByAlias } from '../../../utils/dynamicPageUtils';
import SocialBox from './SocialBox';
import UI from '@/components/UI';
import uuid from '@/utils/uuid';

interface WidgetCaptureComponentProps {
  properties: ContentProperty[];
}

const WidgetCaptureComponent = ({ properties }: WidgetCaptureComponentProps) => {
  const filteredProperties = filterPropertiesByAlias(properties);
  const socialProperties = properties.find(x => x.alias === 'socialLoginOptions')?.value.value;

  return (
    <UI.Container
      id="widget-capture"
      className="bg-dark max-md:pt-60"
    >
      <div className="bg-white grid md:grid-cols-2 px-8 py-16 max-md:px-4 max-md:py-6">
        <div className="flex flex-col pr-8">
          {filteredProperties.map(prop => {
            return (
              <Content
                key={uuid()}
                {...prop}
              />
            );
          })}
        </div>
        <SocialBox properties={(typeof socialProperties !== 'string' && socialProperties) || []} />
      </div>
    </UI.Container>
  );
};

export default WidgetCaptureComponent;
