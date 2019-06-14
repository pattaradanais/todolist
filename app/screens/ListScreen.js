import React from 'react';
import { View, Text,TouchableOpacity,Modal,StyleSheet,TextInput,Button,Alert,FlatList } from "react-native";
import { Icon,Overlay } from 'react-native-elements';
import { Fab } from 'native-base';
import TodoItem from '../components/TodoItem'
import AddItemOverlay from '../components/AddItemOverlay'
import EditOverlay from '../components/EditOverlay'




export default class ListScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                { item:'1Ceeeeeeeeeeeeb'},
                { item:'2Ceeeeeeeeeeeb'},
                { item:'3Ceeeeeeeeeeb'},
                { item:'4Ceeeeeeeeeb'},
                { item:'5Ceeeeeeeeb'},
                { item:'6Ceeeeeeeb'},
                { item:'7Ceeeeeeb'},
                { item:'8Ceeeeeb'},
                { item:'9Ceeeeb'},
                { item:'10Ceeeb'},
                { item:'11Ceeb'},
                { item:'12Ceb'},
            ],
            active: 'true',
            overlayVisible: false,
            editOverlayVIsivle: false,
            textInput_Holder: '',
            targetIndex:0,
            targetName:''
          };   
         
    }
    setTarget = (index , item) => {
        this.setState({ 
            targetIndex:index,
            targetName: item,
         })

    }



    //edit
    onCloseEdit = () => { 
        this.setState({ editOverlayVIsivle: false })
    }

    openEdit = () => {
        this.setState( {editOverlayVIsivle: true} )
    }


    //add
    onClose = () => { 
        this.setState({ overlayVisible: false })
    }
    

    pressAdd = () => {
        if(this.state.textInput_Holder.length == 0){
            alert("Can't be empty")
            return;
        }
        tempObject = { item: this.state.textInput_Holder}
        this.setState({
            data : [...this.state.data, tempObject],
            textInput_Holder:'',
            overlayVisible:false,
        })
        setTimeout(() => this.refs.flatlist.scrollToEnd(), 450)
    }

    textHolder = (text) => {
       this.setState({ textInput_Holder: text })
       
    }

    // addTodolist(){
    //     let list_todo = this.state.list_todo
    //     list_todo.push({item: })
    // }
    

    deleteItem = () => {
        this.setState(() => {
            this.state.data.splice(this.state.targetIndex, 1)
            
        })
        this.setState({ 
            editOverlayVIsivle: false 
        })

     }

     editItem = () => {
       
        this.setState( () => { 
            this.state.data[this.state.targetIndex].item = this.state.textInput_Holder
            })
        this.setState({ 
            textInput_Holder:'',
            editOverlayVIsivle: false 
        })
        
        
    }
    


    render(){
        return(
            
            <View style={styles.container}>
                <FlatList
                    ref={'flatlist'}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item , index}) => {
                        // console.log(`${item} ${index}`)
                        return(
                            <TodoItem 
                            name={item.item}
                            index={index}
                            openEdit={this.openEdit}
                            setTarget={this.setTarget}
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
                        // console.log(this.state.data)
                        // console.log(this.state.data[this.state.target])
                        // console.log(this.state.data[this.state.target].item)

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


                <EditOverlay 
                    isVisible={this.state.editOverlayVIsivle}
                    onClose={this.onCloseEdit}
                    editItem={this.editItem}
                    textHolder={this.textHolder}
                    delete={this.deleteItem}
                    name={this.state.targetName}
                    index={this.state.targetIndex}
                >   
                    
                    </EditOverlay>
               
               
                
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