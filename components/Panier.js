import React from 'react';
import {  Image, SafeAreaView,StyleSheet,FlatList, Text,Picker, TouchableOpacity } from 'react-native'
import config from './config';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import { withNavigation } from 'react-navigation';

export default class Panier extends React.Component{
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
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.totale}</Title>
               </View>
          </Left>
        </CardItem>
      </Card>
      )
    }
    

    componentDidMount(){
        const url = config.apiURL + 'panier';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.panier
          })
        })
        .catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <SafeAreaView>
                <Text>Liste Produits Selectionner</Text>
                <FlatList            
                data = {this.state.DATA}
                renderItem = {this.renderItem}
                keyExtractor={(item, index) => index.toString()}/>
              </SafeAreaView>
        );
    }
}

