import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainRouter  from './app/router/MainRouter' 

export default class App extends Component{
    render(){
        return(
            <MainRouter/>
        )
    }
}