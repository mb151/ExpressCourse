import React from 'react';
import {TouchableOpacity,FlatList,Text} from 'react-native';
import { CardItem, Left } from 'native-base';
import axios from 'axios';
import {Card} from 'react-native-elements'

export default class ProduitsAlea extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      return(
        <TouchableOpacity style={{marginTop: 100, height: 100}}>
       
      <Card
        title={item.nom}
        containerStyle = {{padding: 0,height: 190, width: 180, marginTop: 5 , flexDirection: 'column'} }
        imageProps={{resizeMode: 'stretch'}}
        image={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/' + item.image }}>
          <CardItem>
            <Left>
              <Text style = {{marginBottom: 10}}>
            {item.nom}
          </Text>
            </Left>
          </CardItem>
          
      </Card>
      </TouchableOpacity>
      )
    }
    

    componentDidMount(){
        //const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1';
        const url = 'http://192.168.1.6:8000/api/produit';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.produit
          })
        })
        .catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
        
            <FlatList 
            
              data = {this.state.DATA}
              renderItem = {this.renderItem}
              keyExtractor={(item, index) => index.toString()}/>
        
        );
    }
}
