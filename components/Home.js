import React from 'react'
import {Text, View, Button,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import { Container, Header, Content, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import {  } from 'react-navigation';
import {Card} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import config from './config'
import ProduitsAlea from './ProduitsAlea'




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
      
      // <Container>
      //   <Header>
      //     <Card>
      //       <CardItem cardBody>
      //         <Image source={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/'+ item.imageMagasin }} style={styles.item}/>
      //       </CardItem>
      //     </Card>
      //   </Header>
      // </Container>
      <View>
       
      <TouchableOpacity>
       
      <Card
        title={null}
        imageProps={{resizeMode: 'stretch'}}
        containerStyle = {{padding: 0,height: 190, width: 180, marginTop: 5 , flexDirection: 'column'} }
        image={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/' + item.image }}>
          
      </Card>
      </TouchableOpacity>
      </View>
      //   <Image 
      //     style={{width: 410, height: 100}}
      //     source={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/' + item.imageMagasin}}/>
      //   <View>
      //     <Text style={{color: 'red'}}>
      //       {item.nomMagasin}
      //     </Text>
      //   </View>
      // </View>
    );

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
    const url = 'http://192.168.1.6:8000/api/magasin';
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
         <View style={{}}>
        <Text style={{marginTop: 10, textAlign: 'center', fontSize: 30,}}>
        Magasins
      </Text>
          <FlatList 
          horizontal
            data = {this.state.DATA}
            renderItem = {this.renderItem}
            keyExtractor={(item, index) => index.toString()}/>
            <ProduitsAlea/>
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
      width: 100,
      resizeMode: 'cover',
      flex: 1,
    },
    title: {
      fontSize: 32,
      marginTop: 50,
    },
  })