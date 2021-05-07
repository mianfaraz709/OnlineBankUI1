import React from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const Savings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Savings</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Savings;
