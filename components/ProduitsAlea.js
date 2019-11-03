import React from 'react';
import {TouchableOpacity,FlatList,Text,Image} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import config from './config';

 class ProduitsAlea extends React.Component{
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
                 <Subtitle style={{color: 'black',fontSize: 20}}>Promotion</Subtitle>
               </View>
          </Left>
          <Right>
             <View style={{alignItems: 'flex-end'}}>
               <Subtitle style={{color: 'red', fontSize: 15}}>-50%</Subtitle>
             </View>
          </Right>
        </CardItem>
      </Card></TouchableOpacity>
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


export default withNavigation(ProduitsAlea);