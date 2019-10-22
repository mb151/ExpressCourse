import React from 'react';
import {TouchableOpacity,FlatList,Text,Image, ScrollView} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import axios from 'axios';
import {} from 'react-native-elements'
import config from './config';

export default class MagasinList extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      return(
        <Card>
        <CardItem button>
          <Left>
             <Thumbnail
               style={{width: 80, height: 60, borderRadius: 10, marginRight: 10}} 
               source={{uri: config.imageURL + item.image}} />
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.nom}</Title>
               </View>
          </Left>
          <Right>
             <View style={{alignItems: 'flex-end'}}>
               <Text style={{color: 'black'}}>{item.nomCateg}</Text>
             </View>
          </Right>
        </CardItem>
      </Card>
      )
    }
    

    componentDidMount(){
        const url = config.apiURL + 'magasin';
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
            <ScrollView>
                <FlatList 
                    data = {this.state.DATA}
                    renderItem = {this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>
            </ScrollView>
        );
    }
}
