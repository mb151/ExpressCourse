import React from 'react';
import { Text, Button, TouchableOpacity,FlatList } from 'react-native'
import { CardItem, Left,Card, Right, Thumbnail, Title, Subtitle,View} from 'native-base';
import { withNavigation } from 'react-navigation';
import config from './config';

class TypeProduit extends React.Component{
    constructor(props){
        super(props);
        this.state={
          DATA : [],
         }
    }

    renderItem = ({item}) => {
      return(
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProduitList', {id: item.idType})}>
        <Card>
        <CardItem>
          <Left>
             <Thumbnail
               style={{width: 80, height: 60, borderRadius: 10, marginRight: 10}} 
               source={{uri: config.imageURL + item.imageType}} />
               <View style={{alignItems: 'flex-start', top: -10,}}>
                 <Title style={{color: 'black'}}>{item.nomType}</Title>
                 <Subtitle style={{color: 'black'}}>{item.descriptionType}</Subtitle>
               </View>
          </Left>
        </CardItem>
      </Card>
      </TouchableOpacity>
      )
    }
    

    componentDidMount(){
        const id = this.props.navigation.state.params.id;
        const url = config.apiURL + 'typeParCateg/' + id;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.types
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

export default withNavigation(TypeProduit);