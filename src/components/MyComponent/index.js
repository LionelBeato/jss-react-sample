import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyComponent = (props) => (
  <div>
    <p>MyComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default MyComponent;
