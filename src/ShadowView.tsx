import React from 'react';
import { View, ViewProps } from 'react-native';
import withShadow from './withShadow';

const ShadowView = (props: any) => {
  return React.createElement(View as any, props);
};

export default withShadow<ViewProps>(ShadowView);
