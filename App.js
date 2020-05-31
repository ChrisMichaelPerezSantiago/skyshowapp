import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/routes/homestack.js';
import store from './src/redux/store.js';

//import './src/db/model/index';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

export default App;