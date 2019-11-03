import React from 'react';
import { SafeAreaView,FlatList, Text, } from 'react-native'
import {withNavigation} from 'react-navigation'
import { CardItem,Left,Card,Title,View} from 'native-base';
import config from './config';

class Commande extends React.Component{
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
                 <Title style={{color: 'black'}}>Date : {item.date}</Title>
                 <Title style={{color: 'black'}}> Reglé ou Non: {item.etat}</Title>
                 <Title style={{color: 'black'}}>Total: {item.totale} dh</Title>
               </View>
          </Left>
        </CardItem>
      </Card>
      )
    }
    

    componentDidMount(){
        const url = config.apiURL + 'commande';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            DATA: responseJson.commande
          })
        })
        .catch((error) => {
          console.log(error);
        });
      }

    render(){
        return(
            <SafeAreaView>
                <Text style={{textAlign: 'center', fontSize: 20}}>Liste de mes commandes</Text>
                <FlatList            
                data = {this.state.DATA}
                renderItem = {this.renderItem}
                keyExtractor={(item, index) => index.toString()}/>
              </SafeAreaView>
        );
    }
}
export default withNavigation(Commande);