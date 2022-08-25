import React from 'react';
import { Platform, processColor } from 'react-native';
import ShadowDrop from './ShadowDrop';

type ShadowOptions = {
  enableCSSScale?: boolean;
  enableDpiScale?: boolean;
  enableShadowWithColor?: boolean;
  enableShadowWithContent?: boolean;
  enableCastOnlyBackground?: boolean;
  shadowDownScale?: number;
  patchToParents?: string[];
};

const hasKeys = (data: { [key: string]: any }, keys: string[]) => {
  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    if (data.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};

function withShadow<TComponent, TPropsType>(
  Component:
    | React.FunctionComponent<TPropsType>
    | React.ClassicComponentClass<TPropsType>
    | React.NamedExoticComponent<TPropsType>
    | React.ComponentClass<TPropsType>
    | React.ForwardRefExoticComponent<TPropsType>
    | React.ComponentType<TPropsType>
    | any,
  options?: ShadowOptions
) {
  return React.forwardRef<TComponent | null | undefined, TPropsType>(
    (props: any, ref) => {
      if (
        Platform.OS === 'android' &&
        props.style &&
        hasKeys(props.style, [
          'shadowColor',
          'shadowOffset',
          'shadowOpacity',
          'shadowRadius',
        ])
      ) {
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

        // this is to workaround margin styling bugs on children shadow view,
        // we pass margin style to parent shadow view
        const styleToPatches = ['margin'];
        if (options?.patchToParents) {
          options.patchToParents.forEach((x) => {
            styleToPatches.push(x);
          });
        }
        const patchToParentStyling: { [key: string]: any } = {};

        Object.keys(props.style)
          .filter((x) =>
            x.match(new RegExp(`^(${styleToPatches.join('|')})`, 'i'))
          )
          .forEach((x) => {
            patchToParentStyling[x] = props.style[x];
            delete props.style[x];
          });

        return (
          <ShadowDrop shadow={shadow} style={patchToParentStyling}>
            {React.createElement(Component, { ...props, ref })}
          </ShadowDrop>
        );
      }

      return React.createElement(Component, { ...props, ref });
    }
  );
}

export default withShadow;
