import React from 'react';
import {TouchableOpacity,FlatList,Text,Image, ScrollView} from 'react-native';
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import {withNavigation} from 'react-navigation'
import config from './config';

class MagasinListByItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      const id = this.props.navigation.state.params.id
      return(
          <TouchableOpacity onPress={() => this.props.navigation.navigate('TypeProduit',{id: id})}>
        <Card>
        <CardItem >
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
      </Card></TouchableOpacity>
      )
    }
    

    componentDidMount(){
        const id = this.props.navigation.state.params.id;
        const url = config.apiURL + 'magasinParCateg/'+id;
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


export default withNavigation(MagasinListByItem);