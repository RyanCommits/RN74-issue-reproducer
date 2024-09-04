import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from './RTNCenteredText/js/RTNCenteredText';

export default (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <TextComponent text="Hello there!" style={styles.nativeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  nativeText: {
    width: '100%',
    height: 30,
  },
});
