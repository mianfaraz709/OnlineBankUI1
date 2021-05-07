import React from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default History;
