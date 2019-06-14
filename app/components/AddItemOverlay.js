import React from 'react';
import { View, Text,TouchableOpacity,Modal,StyleSheet,TextInput,Button,Alert,FlatList} from "react-native";
import { Icon,Overlay } from 'react-native-elements'; 
 

export default class AddItemOverlay extends React.Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Overlay isVisible={this.props.isVisible} onBackdropPress={() => this.props.onClose()}  height={200} width={300}> 
                <View style={{flex:1}}>
                    <View style={{flex:3,justifyContent:'space-around',}}>
                        <Text style={{color:'#156484', fontSize:20, alignSelf:'center',}}>ADD LIST</Text>
                        <TextInput 
                            style={{borderColor:'#bee5f4' , borderWidth:1, borderRadius:5, paddingHorizontal: 5,}}  
                            placeholder='Text...'
                            onChangeText={(text) => this.props.textHolder(text)}
                            
                            ></TextInput>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={styles.abbButton}  onPress={() => this.props.pressAdd()}><Text style={{color:'#156484'}}>add</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.abbButton}  onPress={() => this.props.onClose()}><Text style={{color:'#156484'}}>cancle</Text></TouchableOpacity>
                    </View>
                </View>

            </Overlay>
        )
    }

}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 5,
        
        
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
    