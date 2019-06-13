import React from 'react';
import { View, Text,TouchableOpacity,Modal,StyleSheet,TextInput,Button,Alert,FlatList } from "react-native";
import { Icon,Overlay } from 'react-native-elements';
import { Fab } from 'native-base';
import TodoItem from '../components/TodoItem'
import AddItemOverlay from '../components/AddItemOverlay'



export default class ListScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                { name:'Ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb'},
                { name:'Ceeeeeeeeeeeeeeeeeeeb'},
                { name:'Ceeeeeeeeeeb'},
            ],
            active: 'true',
            overlayVisible: false,
            textInput_Holder: '',
          };    
    }


    onClose = () => { 
        this.setState({ overlayVisible: false })
    }

    pressAdd = () => {
        if(this.state.textInput_Holder.length == null){
                alert("Can't be empty");
                return;
              }
        tempObject = { name: this.state.textInput_Holder}
        this.setState({
            data : [...this.state.data, tempObject],
            textInput_Holder:null,
            overlayVisible:false,
        })
    }

    textHolder = (text) => {
       this.setState({ textInput_Holder: text })
       console.log(this.state.textInput_Holder)
    }
  
    


    render(){
        return(
            
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return(
                            <TodoItem 
                            name={item.name}
                            />
 
                          )}
                          }
                      />


                <Fab
                    active={this.state.active}
                    containerStyle={{ }}
                    style={{ backgroundColor: '#2196c4', }}
                    position="bottomRight"
                    onPress={() => {
                        this.setState({ overlayVisible: true })
                    }}
                >
        
                    <Icon
                    name='plus'
                    type='font-awesome'
                    color='#fff'
                    />
                   
                
                </Fab>

                <AddItemOverlay
                    isVisible={this.state.overlayVisible}
                    onClose={this.onClose}
                    pressAdd={this.pressAdd}
                    textHolder={this.textHolder}
                   
                />
               
                
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
    //   overlayStyle: {
    //     // height:200,
    //     // width:300,
    //     backgroundColor: '#eee',
    //     justifyContent: 'center',
    //     //padding:20,
    //     //alignSelf:'center',
    //     borderRadius:10,
    //    // marginTop: 40,
       
        
    //   },
  
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