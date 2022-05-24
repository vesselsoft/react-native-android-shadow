import React from 'react';
import {
  Platform,
  requireNativeComponent,
  UIManager,
  ViewProps,
  View,
  processColor,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-shadow-android' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ComponentName = 'AndroidShadowView';

const ShadowDrop =
  Platform.OS === 'android'
    ? UIManager.getViewManagerConfig(ComponentName) != null
      ? requireNativeComponent<ViewProps>(ComponentName)
      : () => {
          throw new Error(LINKING_ERROR);
        }
    : View;

const AndroidShadowView = React.memo<ViewProps>((props: any) => {
  const _props = Object.assign({}, props);

  if (Platform.OS === 'android' && props.style) {
    _props.shadow = {};

    if (props.style.shadowColor) {
      _props.shadow.shadowColor = processColor(props.style.shadowColor);
    }

    if (props.style.shadowOffset) {
      _props.shadow.shadowOffset = props.style.shadowOffset;
    }

    if (props.style.shadowOpacity) {
      _props.shadow.shadowOpacity = props.style.shadowOpacity;
    }

    if (props.style.shadowRadius) {
      _props.shadow.shadowRadius = props.style.shadowRadius;
    }
  }

  return React.createElement(ShadowDrop as any, _props);
});

export default AndroidShadowView;
