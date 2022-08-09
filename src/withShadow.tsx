import React from 'react';
import {
  Platform,
  processColor,
  requireNativeComponent,
  UIManager,
  ViewProps,
} from 'react-native';

const LINKING_ERROR =
  `The package '@vesselsoft/react-native-shadow' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ComponentName = 'AndroidShadowView';

const ShadowDrop: any =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

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
    | React.NamedExoticComponent<TPropsType>,
  options?: ShadowOptions
) {
  return React.memo<TPropsType>((props: any) => {
    if (Platform.OS === 'android' && props.style) {
      const shadow: { [key: string]: any } = options ? options : {};

      if (props.style.shadowColor >= 0) {
        shadow.shadowColor = processColor(props.style.shadowColor);
      }

      if (props.style.shadowOffset >= 0) {
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
