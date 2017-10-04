import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDX5FzRU0UMJt8jYgU6L-V5gVE-rRkXSt8",
      authDomain: "manager-app-badf0.firebaseapp.com",
      databaseURL: "https://manager-app-badf0.firebaseio.com",
      projectId: "manager-app-badf0",
      storageBucket: "manager-app-badf0.appspot.com",
      messagingSenderId: "1079840071084"
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    // empty object is optional initial app state
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
