import React from 'react'
import {View,SafeAreaView,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import { withNavigation } from 'react-navigation';
import config from './config'

class CategorieList extends React.Component{

  constructor(props){
    super(props);
  this.renderItem = this.renderItem.bind(this);
  //   navigate  = this.props.navigation;
    this.state={
      DATA : [],
     }
  }

  componentDidMount(){
    const url = config.apiURL + 'categorie';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        DATA: responseJson.categorie
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderItem = ({item,idMag}) => {
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MagasinList',{idMag: idMag})}>
          <Image 
              style={{width: 120, height: 100, resizeMode: 'cover', borderRadius: 20, marginTop: 20}}
              source={{uri: config.imageURL + item.image}}/>
              <Text style={{textAlign: 'center',position: 'absolute', top: 80, left: 0, right: 0, bottom: 10, justifyContent: 'center', alignItems: 'center', fontSize: 20, backgroundColor: 'white', borderRadius: 20, opacity: 0.7}}>
                  {item.nomCateg}
              </Text>
              
      </TouchableOpacity>
    )
        
  }

   render(){
       return(
       <SafeAreaView>
          <FlatList 
          horizontal
            data = {this.state.DATA}
            ItemSeparatorComponent={() => <View style={{width: 10}}/>}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {
              
              this.renderItem
              
             /* 
              ({item})=> (
            
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MagasinList')}>
          <Image 
              style={{width: 120, height: 100, resizeMode: 'cover', borderRadius: 20, marginTop: 20}}
              source={{uri: config.imageURL + item.image}}/>
              <Text style={{textAlign: 'center',position: 'absolute', top: 80, left: 0, right: 0, bottom: 10, justifyContent: 'center', alignItems: 'center', fontSize: 20, backgroundColor: 'white', borderRadius: 20, opacity: 0.7}}>
                  {item.nom}
              </Text>
      </TouchableOpacity>
            

              )*/}/>
                        
        </SafeAreaView>
       
       );
   }
}

export default withNavigation(CategorieList);
const styles = StyleSheet.create({
 
  })