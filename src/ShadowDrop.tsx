import {
  Platform,
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

export default ShadowDrop;
