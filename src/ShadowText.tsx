import React from 'react';
import { Platform, processColor, Text, TextProps } from 'react-native';
import { ShadowDrop } from './index';

const ShadowText = React.memo<TextProps>((props: any) => {
  if (Platform.OS === 'android' && props.style) {
    const shadow: { [key: string]: any } = {};

    if (props.style.shadowColor) {
      shadow.shadowColor = processColor(props.style.shadowColor);
    }

    if (props.style.shadowOffset) {
      shadow.shadowOffset = props.style.shadowOffset;
    }

    if (props.style.shadowOpacity) {
      shadow.shadowOpacity = props.style.shadowOpacity;
    }

    if (props.style.shadowRadius) {
      shadow.shadowRadius = props.style.shadowRadius;
    }

    return (
      <ShadowDrop shadow={shadow}>
        {React.createElement(Text as any, props) as any}
      </ShadowDrop>
    );
  }

  return React.createElement(Text as any, props);
});

export default ShadowText;
