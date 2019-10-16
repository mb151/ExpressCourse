import React from 'react';
import {TouchableOpacity,FlatList,Text,Image} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import axios from 'axios';
import {} from 'react-native-elements'
import config from './config';

export default class ProduitsAlea extends React.Component{
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
               source={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/' + item.image}} />
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.reference}</Title>
                 <Subtitle style={{color: 'black'}}>Subtitle line</Subtitle>
               </View>
          </Left>
          <Right>
             <View style={{alignItems: 'flex-end'}}>
               <Text style={{color: 'black'}}>12 dh /kg</Text>
               <Subtitle style={{color: 'black'}}>Bio</Subtitle>
             </View>
          </Right>
        </CardItem>
      </Card>
      //   <TouchableOpacity style={{}}>
      //     <Image 
      //         style={{width: 500, height: 100, resizeMode: 'cover', borderRadius: 20, marginTop: 20}}
      //         source={{uri: 'http://192.168.1.6/LaravelProject/APICourseOnline/' + item.image}}/>
      // </TouchableOpacity>
      )
    }
    

    componentDidMount(){
        const url = config.apiURL + 'produit';
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
