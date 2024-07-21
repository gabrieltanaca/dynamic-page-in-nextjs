import React from 'react';
import Content from './Content';

interface WidgetCaptureComponentProps {
  properties: Property[];
}

const WidgetCaptureComponent = ({ properties }: WidgetCaptureComponentProps) => {
  return (
    <div>
      {properties.map(prop => {
        return <Content {...prop} />;
      })}
    </div>
  );
};

export default WidgetCaptureComponent;
