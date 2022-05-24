import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import AndroidShadowView from 'react-native-android-shadow';

export default function App() {
  return (
    <View style={styles.container}>
      <AndroidShadowView style={styles.box}>
        <Text>tesss</Text>
      </AndroidShadowView>
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
