import { ShadowView } from '@vesselsoft/react-native-shadow';
import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const ref = React.useRef<View>();
  return (
    <View style={styles.container}>
      <ShadowView ref={ref} style={styles.box}>
        <Text>tesss</Text>
      </ShadowView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
