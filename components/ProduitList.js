import React from 'react';
import {TouchableOpacity,FlatList,Text,Image, SafeAreaView} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import axios from 'axios';
import {} from 'react-native-elements'
import config from './config';

export default class ProduitList extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProduitDetail', {id: item.idProd})}>
        <Card>
        <CardItem>
          <Left>
             <Thumbnail
               style={{width: 80, height: 60, borderRadius: 10, marginRight: 10}} 
               source={{uri: config.imageURL + item.image}} />
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.reference}</Title>
                 <Subtitle style={{color: 'black'}}>Subtitle line</Subtitle>
               </View>
          </Left>
          <Right>
             <View style={{alignItems: 'flex-end'}}>
               <Text style={{color: 'black'}}>Prix: {item.prix} dh /kg</Text>
               <Subtitle style={{color: 'black'}}>Quantité Stock: {item.qteSock}</Subtitle>
             </View>
          </Right>
        </CardItem>
      </Card>
     </TouchableOpacity>
      )
    }
    

    componentDidMount(){
        const id = this.props.navigation.state.params.id;
        const url = config.apiURL + 'produitMag/' + id ;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.produits
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
