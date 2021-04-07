import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInAndSignUp from './screens/loginandsignup';
import homeScreen from './screens/homeScreen';
import {AppTabNavigator} from "./component/AppTabNavigator"
import {createSwitchNavigator , createAppContainer} from "react-navigation"
import {AppDrawerNavigator} from "./component/AppDrawerNavigator"
import {CreateDrawerNavigator} from "react-navigation-drawer"
import CustomSideBarMenu from "./component/CustomSideBarMenu"
import SettingScreen from "./screens/settingScreen"


export default function App() {
  return (
    <LogInAndSignUp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavigator = createSwitchNavigator({
  LogInAndSignUp:{screen:LogInAndSignUp},
  Drawer:{screen:AppDrawerNavigator}

  
})

const AppContainer= createAppContainer(SwitchNavigator)

