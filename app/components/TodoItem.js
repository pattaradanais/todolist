import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class todoItem extends React.Component{
  constructor(props){
    super(props);
  }

  
  render(){
      return(
        <View style={{height:50 ,backgroundColor:'#eee',borderRadius:10,flexDirection:'row', justifyContent:'center',marginVertical:5}}>
        <TouchableOpacity style={{flex:3, justifyContent:'center', paddingLeft: 5, }} 
                          onLongPress={()=>{
                            this.props.openEdit() 
                            // this.props.setTarget(this.props.index,this.props.name)
                            this.props.setTarget(this.props.index)
                          }
                          }><Text> {this.props.name} </Text></TouchableOpacity>
        {/* {console.log(this.props.index)} */}
        {/* <TouchableOpacity style={{flex:1, backgroundColor:'red', borderBottomRightRadius:10,borderTopRightRadius:10, justifyContent:'center'}} onPress={()=>alert("Can't delete yet!!")}><Text style={{ alignSelf:'center'}}>Delete</Text></TouchableOpacity> */}
        
        </View>
      );
  }}
 