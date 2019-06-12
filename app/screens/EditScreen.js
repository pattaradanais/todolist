import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity ,TextInput } from "react-native";

export default class EditScreen extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:3,justifyContent:'space-around',}}>
                    <Text style={{color:'#156484', fontSize:20, alignSelf:'center',}}>EDIT LIST</Text>
                    <TextInput style={{borderColor:'#bee5f4' , borderWidth:1, borderRadius:5, paddingHorizontal: 5,}}  >Text...</TextInput>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.abbButton}  onPress={() => null}><Text style={{color:'#156484'}}>edit</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.abbButton}  onPress={() => null}><Text style={{color:'#156484'}}>cancle</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      height:200,
      width:300,
      backgroundColor: '#eee',
      justifyContent: 'center',
      padding:20,
      alignSelf:'center',
      borderRadius:10,
      marginTop: 40,
     
      
    },

    abbButton:{
        marginHorizontal: 5,
        height:40,
        flex:1,
        alignSelf: 'center',
        backgroundColor:'skyblue',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: 'darkblue',
       
        shadowRadius: 5,
    
        
    }
})