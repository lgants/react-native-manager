import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
