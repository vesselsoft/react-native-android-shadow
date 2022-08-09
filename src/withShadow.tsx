import React from 'react';
import { Platform, processColor } from 'react-native';
import ShadowDrop from './ShadowDrop';

type ShadowOptions = {
  enableCSSScale: boolean;
  enableDpiScale: boolean;
  enableShadowWithColor: boolean;
  enableShadowWithContent: boolean;
  enableCastOnlyBackground: boolean;
  shadowDownScale: number;
};

function withShadow<TPropsType extends object>(
  Component:
    | React.FunctionComponent<TPropsType>
    | React.ClassicComponentClass<TPropsType>
    | React.NamedExoticComponent<TPropsType>
    | React.ComponentClass<TPropsType>
    | React.ForwardRefExoticComponent<TPropsType>
    | any,
  options?: ShadowOptions
) {
  return React.memo<TPropsType>((props: any) => {
    if (Platform.OS === 'android' && props.style) {
      const shadow: { [key: string]: any } = options ? options : {};

      if (props.style.shadowColor) {
        shadow.shadowColor = processColor(props.style.shadowColor);
      }

      if (props.style.shadowOffset) {
        shadow.shadowOffset = props.style.shadowOffset;
      }

      if (props.style.shadowOpacity >= 0) {
        shadow.shadowOpacity = props.style.shadowOpacity;
      }

      if (props.style.shadowRadius >= 0) {
        shadow.shadowRadius = props.style.shadowRadius;
      }

      return (
        <ShadowDrop shadow={shadow}>
          {React.createElement(Component, props)}
        </ShadowDrop>
      );
    }

    return React.createElement(Component, props);
  });
}

export default withShadow;
