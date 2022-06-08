import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import ShadowView from 'src/ShadowView';

export default function App() {
  return (
    <View style={styles.container}>
      <ShadowView style={styles.box}>
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
