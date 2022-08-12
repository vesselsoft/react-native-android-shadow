import { Text, TextProps, View, ViewProps } from 'react-native';
import withShadow from './withShadow';

const ShadowView = withShadow<View, ViewProps>(View);

const ShadowText = withShadow<Text, TextProps>(Text);

export { ShadowView, ShadowText, withShadow };
