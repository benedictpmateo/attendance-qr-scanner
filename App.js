import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './screens/Counter';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

const App = () => (
  <Provider
    store={store}
  >
    <Counter />
  </Provider>
);

export default App;