import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';

export default class todoItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
        <View style={{height:50 ,backgroundColor:'#eee',borderRadius:10,flexDirection:'row', justifyContent:'center',marginVertical:5}}>
        <Text style={{flex:3}}> {this.props.name} </Text>
        <TouchableOpacity style={{flex:1, backgroundColor:'red', borderBottomRightRadius:10,borderTopRightRadius:10}}><Text style={{ alignSelf:'center'}}>Delete</Text></TouchableOpacity>
        
        </View>
      );
  }}
 