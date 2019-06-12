import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import AddScreen from '../screens/AddScreen'
import EditScreen from '../screens/EditScreen'


  
  const AppNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title:'Home',
      }),
    },
    ListScreen:{
        screen: ListScreen,
        navigationOptions: ({ navigation }) => ({
            title:'To Do List',
          }),
    },
    AddScreen:{
      screen: AddScreen,
      navigationOptions: ({navigation}) =>({
        title:'Add List',
      })
    },
    EditScreen:{
      screen: EditScreen,
      navigationOptions: ({navigation}) =>({
        title:'Edit List',
      })
    },

  },
  { initialRouteName: 'ListScreen' }
  );
  
  export default createAppContainer(AppNavigator);