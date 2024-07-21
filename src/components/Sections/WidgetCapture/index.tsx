import React from 'react';
import Content from './Content';
import { filterPropertiesByAlias } from '../../../utils/dynamicPageUtils';
import SocialBox from './SocialBox';

interface WidgetCaptureComponentProps {
  properties: ContentProperty[];
}

const WidgetCaptureComponent = ({ properties }: WidgetCaptureComponentProps) => {
  const filteredProperties = filterPropertiesByAlias(properties);
  const socialProperties = properties.find(x => x.alias === 'socialLoginOptions')?.value.value;

  return (
    <div
      id="widget-capture"
      className="bg-dark py-16 px-40"
    >
      <div className="bg-white grid grid-cols-2 px-8 py-16">
        <div className="flex flex-col pr-8">
          {filteredProperties.map(prop => {
            return <Content {...prop} />;
          })}
        </div>
        <SocialBox properties={(typeof socialProperties !== 'string' && socialProperties) || []} />
      </div>
    </div>
  );
};

export default WidgetCaptureComponent;
