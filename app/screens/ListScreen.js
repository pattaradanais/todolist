import React from 'react'
import { View, Text,TouchableOpacity,Modal,StyleSheet,TextInput,Button,Alert,ScrollView} from "react-native";
import { Icon,Overlay } from 'react-native-elements'
import {  Fab } from 'native-base';




export default class ListScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {name:'Ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb'},
                {name:'Ceeeeeeeeeeeeeeeeeeeb'},
                {name:'Ceeeeeeeeeeb'},
    
              ],
            active: 'true',
            overlayVisible: false,
          };
          
    }

    toAdd() {
        this.props.navigation.navigate('AddScreen')
        
    }

    toEdit() {
        this.props.navigation.navigate('EditScreen')
    }


    render(){
        return(
            
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    // renderItem={({item}) => this.renderItem(item)}
                />
                {/* <TouchableOpacity onPress={() => this.toAdd()}><Text style={{backgroundColor:'green'}}>Go to add screen</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.toEdit()}><Text style={{backgroundColor:'blue'}}>Go to edit screen</Text></TouchableOpacity> */}

                <Fab
                    active={this.state.active}
                    containerStyle={{ }}
                    style={{ backgroundColor: '#2196c4', }}
                    position="bottomRight"
                    onPress={() => this.setState({ overlayVisible: true })}>
                    <Icon
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    />
                
                </Fab>

                <Overlay isVisible={this.state.overlayVisible} onBackdropPress={() => this.setState({ overlayVisible: false })}  height={200} width={300}> 
                    <View style={{flex:1}}>
                        <View style={{flex:3,justifyContent:'space-around',}}>
                            <Text style={{color:'#156484', fontSize:20, alignSelf:'center',}}>ADD LIST</Text>
                            <TextInput style={{borderColor:'#bee5f4' , borderWidth:1, borderRadius:5, paddingHorizontal: 5,}}  placeholder='Text...'></TextInput>
                        </View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={styles.abbButton}  onPress={() => null}><Text style={{color:'#156484'}}>add</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.abbButton}  onPress={() => this.setState({ overlayVisible: false })}><Text style={{color:'#156484'}}>cancle</Text></TouchableOpacity>
                        </View>
                    </View>
  
                </Overlay>
                
            </View>
            
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
      overlayStyle: {
        // height:200,
        // width:300,
        backgroundColor: '#eee',
        justifyContent: 'center',
        //padding:20,
        //alignSelf:'center',
        borderRadius:10,
       // marginTop: 40,
       
        
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