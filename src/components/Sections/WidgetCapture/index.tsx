import React from 'react';
import Content from './Content';
import { filterPropertiesByAlias } from '../../../utils/dynamicPageUtils';

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
      <div className="bg-white flex">
        {filteredProperties.map(prop => {
          return <Content {...prop} />;
        })}
        {typeof socialProperties !== 'string' &&
          socialProperties?.map(social => {
            return (
              <div className="bg-red-500">
                <p>{social}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WidgetCaptureComponent;
