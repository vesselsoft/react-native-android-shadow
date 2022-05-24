# @vesselsoft/react-native-shadow

React Native Shadow View for Android based on [L-Briand/ShadowLayout](https://github.com/L-Briand/ShadowLayout) library. Use default RN View component for ios fallback.

## Installation

```sh
yarn install @vesselsoft/react-native-shadow
```

## Usage

```js
import { Text } from 'react-native';
import AndroidShadowView from '@vesselsoft/react-native-shadow';

// ...

<AndroidShadowView
  style={{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  }}
>
  <Text>Hello World!</Text>
</AndroidShadowView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
