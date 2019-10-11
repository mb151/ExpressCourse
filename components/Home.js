import React from 'react'
import {Text, View, Button,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import {Icon} from 'native-base'
import {  } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import config from './config'




export default class Home extends React.Component{
  // Item({ title, id }) {
  //   return (
  //     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //       <Text style={styles.title}>{id}</Text>
  //     </View></TouchableOpacity>
  //   );
  // }
  constructor(props){
    super(props);
    this.state={
      DATA : [],
     }
}


  renderItem = ({item}) => {
    return(
      <View style={styles.container}>
        <Image 
          style={{width: 410, height: 100}}
          source={{uri: 'http://192.168.2.20/LaravelProject/APICourseOnline/' + item.imageMagasin}}/>
        <View>
          <Text style={{color: 'red'}}>
            {item.nomMagasin}
          </Text>
        </View>
      </View>
    )

  }

  // componentDidMount(){
  //   axios.get('http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent = 1')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({DATA : res.book_array});
  //     }) ;   
  // }

  componentDidMount(){
    //const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1';
    const url = 'http://192.168.2.20:8000/api/test';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        DATA: responseJson.magasin
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

   render(){
       return(
        <View style={styles.container}>
          <FlatList 
            data = {this.state.DATA}
            renderItem = {this.renderItem}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
       )
   }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 0,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      marginTop: 50,
    },
  })