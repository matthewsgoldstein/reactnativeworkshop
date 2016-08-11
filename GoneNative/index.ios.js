import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class GoneNative extends Component {
  render() {
    return (
      <Text style={redStyle}>{"\n"}Hello world!</Text>
    );
  }
}

const redStyle = {
  color: 'red'
}

AppRegistry.registerComponent('GoneNative', () => GoneNative);
