import React from 'react';
import { Text, TextProps } from 'react-native';
import withShadow from './withShadow';

const ShadowText = (props: any) => {
  return React.createElement(Text as any, props);
};

export default withShadow<TextProps>(ShadowText);
