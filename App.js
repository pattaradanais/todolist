import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer } from 'react-navigation';




export default class App extends Component {
  
  render(){
  return (
    <View style={styles.container}>
      <View style={{flex:4,backgroundColor:'#fff' }}>
        
        <View style={styles.header}>

          <View style={{flex:1,paddingTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>All My Account</Text>
          </View>

          <View style={{flex:1 }}>
            <Text style={{textAlign:'right',fontWeight:'bold',fontSize:20}} onPress={() => Alert.alert('You tapped the button!')}>+</Text>
          </View>

        </View>

        <View style={styles.header}>
          <Text style={{fontSize:14,color:'rgba(0,0,0,0.4)'}}>June 06 2019</Text>
        </View>
        
      </View>  
      <View style={{flex:8,  marginBottom:-10}}>
        
        <LinearGradient  colors={[ '#00334d','#005580']} start={[0,0]} end={[1,0]} style={styles.card}>
        
          <View style={{flex:2, flexDirection:'row',paddingVertical:10,paddingHorizontal:25,alignItems:'baseline'}}>
            <View style={{flex:1,justifyContent:'center',}}>
              <View style={{flex:1}}><Image resizeMode='contain' source={require('./assets/Download-Visa-Logo-PNG-Image.png')} style={{width: 50, height: 50}}></Image></View>
              <View style={{flex:1}}><Image resizeMode='contain' source={require('./assets/chip.png')} style={{width: 50, height: 50}}></Image></View>
            </View>
            <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center',paddingTop:30,}}>
              <View style={{flex:1}}><Text style={{fontSize:10,color:'#79ff4d'}}>Available Balance</Text></View>
              <View style={{flex:1, flexDirection:'row'}}><View><Text style={{color:'white',backgroundColor:'black',borderRadius:20,paddingHorizontal:5,alignSelf:'center'}}>$</Text></View><Text style={{fontSize:16,color:'white',}}>7,392.00</Text></View>
            </View>
          </View>

          <View style={{flex:1,flexDirection:'row', justifyContent:'center',paddingHorizontal:20}}>
            <Text style={styles.cardNumber}>9999</Text>
            <Text style={styles.cardNumber}>9999</Text>
            <Text style={styles.cardNumber}>9999</Text>
            <Text style={styles.cardNumber}>9999</Text>
          </View>

          <View style={{flex:1, flexDirection:'row', paddingBottom: 10,}}>
            <View style={styles.cardBottom}>
              <Text style={{color:'white',}}>EXPIRE 02/22</Text>
            </View>
            <View style={styles.cardBottom}>
              <Text style={{color:'white',}}>CVC CODE 230</Text>
            </View>
          </View>

        </LinearGradient>
        <View style={{flexDirection:'row', marginTop: -20,}}>
            <View style={{flex:2}}></View>
            <View style={{flex:1 ,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:40 ,paddingHorizontal:5}}>.</Text>
              <Text style={{fontSize:40 ,paddingHorizontal:5}}>.</Text>
              <Text style={{fontSize:40 ,paddingHorizontal:5}}>.</Text>
            </View>
            <View style={{flex:2}}></View>
        </View>
      </View>
      <View style={{flex:5,}}>
        <View style={styles.inComeBox}>
          <View style={{flex:1}}>

            <View style={styles.inComeChild}><Text style={{borderWidth:1,borderRadius:10, paddingHorizontal: 10,borderColor: 'rgba(100,100,100,0.2)',}}>Income</Text></View>
            <View style={styles.inComeChild}><Text style={{fontSize:20,color:'rgb(0, 204, 0)',fontWeight:'bold',paddingBottom:2}}>↓</Text><Text style={{color:'rgb(0, 204, 0)'}}> $9,302.00</Text></View>

          </View>
          <View style={{flex:1}}>
          <View style={styles.inComeChild}><Text style={{borderWidth:1,borderRadius:10, paddingHorizontal: 10,borderColor: 'rgba(100,100,100,0.2)',}}>Expense</Text></View>
          <View style={styles.inComeChild}><Text style={{fontSize:20,color:'rgb(255, 51, 51)',fontWeight:'bold',paddingBottom:2}}>↑</Text><Text style={{color:'rgb(255, 51, 51)'}}> $2,790.00</Text></View>
            
          </View>

        </View>
      </View>
      <View style={styles.movement}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}><Text style={{fontSize:15}}>Detail of movements</Text></View>
          <View style={{flex:1,}}><Image resizeMode='contain' source={require('./assets/calendar.png')} style={{width: 15, height: 15,alignSelf:'flex-end' }}></Image></View>
        </View>
      
          <ScrollView style={{marginBottom:5}}>
            <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                  <Text>Restaurant Manhatatan</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>June 10 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'rgb(255, 51, 51)',fontWeight:'bold',paddingBottom:2}}>↑</Text><Text style={{color:'rgb(255, 51, 51)'}}> $170</Text>
                </View>
              </View>
          </View>

            <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Salary Deposit</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>June 2 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'rgb(0, 204, 0)',fontWeight:'bold',paddingBottom:2}}>↓</Text><Text style={{color:'rgb(rgb(0, 204, 0)'}}> $1,200</Text>
                </View>
              </View>

            </View> 

            <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                  </View>
                  <View style={{flex:3}}>
                    <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                      <Text>Central Market</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                    <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>May 28 2018</Text>
                    </View>
                  </View>
                  <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'rgb(255, 51, 51)',fontWeight:'bold',paddingBottom:2}}>↑</Text><Text style={{color:'rgb(255, 51, 51)'}}> $50</Text>
                  </View>
              </View>
            </View> 

            <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Salary Deposit</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>May 1 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:20,color:'rgb(0, 204, 0)',fontWeight:'bold',paddingBottom:2}}>↓</Text><Text style={{color:'rgb(rgb(rgb(0, 204, 0)'}}> $1,200</Text>
                </View>
            </View>
          </View> 

          <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Withdraw</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>Fab 28 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:20,color:'rgb(255, 51, 51)',fontWeight:'bold',paddingBottom:2}}>↑</Text><Text style={{color:'rgb(rgb(rgb(255, 51, 51)'}}> $9,999</Text>
                </View>
            </View>
          </View> 

          <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Deposit</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>Feb 15 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:20,color:'rgb(0, 204, 0)',fontWeight:'bold',paddingBottom:2}}>↓</Text><Text style={{color:'rgb(rgb(rgb(0, 204, 0)'}}> $9,999</Text>
                </View>
            </View>
          </View> 

          <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Withdraw</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>Fab 12 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:20,color:'rgb(255, 51, 51)',fontWeight:'bold',paddingBottom:2}}>↑</Text><Text style={{color:'rgb(rgb(rgb(255, 51, 51)'}}> $9,999</Text>
                </View>
            </View>
          </View> 

          <View style={styles.scrollBox}>
              <View style={styles.movementBox}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image resizeMode='contain' source={require('./assets/icon.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View style={{flex:3}}>
                  <View style={{flex:1,justifyContent:'center',paddingTop:5}}>
                    <Text>Deposit</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',paddingBottom:5}}>
                  <Text style={{fontSize:10,color:'rgba(0,0,0,0.4)'}}>Feb 1 2018</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:20,color:'rgb(0, 204, 0)',fontWeight:'bold',paddingBottom:2}}>↓</Text><Text style={{color:'rgb(rgb(rgb(0, 204, 0)'}}> $9,999</Text>
                </View>
            </View>
          </View> 
          </ScrollView>
        
        
        
      </View>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingTop:25,
    
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    // backgroundColor:'#fff',
    paddingHorizontal: 20,
    alignItems:'baseline',
    marginVertical: -10,
    

  },
  cardBottom:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',

  },

  card:{
    flex:1,
    //backgroundColor:'#00334d', 
    marginTop:-20,
    marginVertical: 5,
    marginHorizontal:20,
    borderRadius: 10,
    paddingHorizontal:20,
    height:400,
    width: 300,
    alignSelf:'center',
  },
  cardNumber:{
    flex:1,
    fontSize:20,
    textAlign:'center',
    color:'white',
  },

  inComeBox:{
    flex:1,
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal:20,
    paddingVertical:5,
    borderRadius: 5,
    borderColor: 'rgba(100,100,100,0.1)',
    borderWidth:1,
    backgroundColor:'#fff'
    
  },
  inComeChild:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },

  movement:{
    flex:10,
    marginHorizontal:20,
    flexDirection: 'column',
    marginBottom:20,
  },

  movementBox:{
    flex:1,
    flexDirection: 'row',
    marginVertical: 2,
    
    borderRadius: 5,
    borderColor: 'rgba(100,100,100,0.1)',
    borderWidth:1,
    backgroundColor:'#fff'
  },

  scrollBox:{
    height: 80,
    paddingVertical:2,
  },
  box1: {
    height: 80,
    backgroundColor: 'blue',
    paddingVertical:2,
  },


});
