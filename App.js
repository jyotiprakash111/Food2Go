import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './Components/StackNav';
import DrawerNav from './Components/Drawer';
import TabNavigator from './Components/TabNavigator';
import Login from './Components/Screen/Login';
import FoodItems from './Components/Screen/FoodItems';


class App extends Component {

  render() {
    return (
      <TabNavigator />
    );
  }
}

export default App;
