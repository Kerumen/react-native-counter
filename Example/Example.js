import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from 'react-native-counter';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter end={1000} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
