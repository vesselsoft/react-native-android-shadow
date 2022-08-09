import { Text, TextProps, View, ViewProps } from 'react-native';
import withShadow from './withShadow';

const ShadowView = withShadow<ViewProps>(View);

const ShadowText = withShadow<TextProps>(Text);

export { ShadowView, ShadowText, withShadow };
