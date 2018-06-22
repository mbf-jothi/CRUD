import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import Route from './src/containers/App';
import store from './src/store';

class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Provider store={store}><Route /></Provider>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;