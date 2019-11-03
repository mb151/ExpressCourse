import React from 'react';
import {TouchableOpacity,FlatList,Text,Image, SafeAreaView} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import axios from 'axios';
import {} from 'react-native-elements'
import config from './config';

export default class Produits extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      return(
        <Card>
        <CardItem>
          <Left>
             <Thumbnail
               style={{width: 80, height: 60, borderRadius: 10, marginRight: 10}} 
               source={{uri: config.imageURL + item.image}} />
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.reference}</Title>
                 <Subtitle style={{color: 'black'}}>{item.nomType}</Subtitle>
               </View>
          </Left>
          <Right>
             <View style={{alignItems: 'flex-end'}}>
               <Text style={{color: 'black'}}>Prix: Par /kg</Text>
             </View>
          </Right>
        </CardItem>
      </Card>
      )
    }
    

    componentDidMount(){
        const url = config.apiURL + 'allproduct';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.allproduit
          })
        })
        .catch((error) => {
          console.log(error);
        });
      }

    render(){
        
            
        return(
        <SafeAreaView>
            <FlatList            
              data = {this.state.DATA}
              renderItem = {this.renderItem}
              keyExtractor={(item, index) => index.toString()}/></SafeAreaView>
        );
    }
}
