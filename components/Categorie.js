import React from 'react'
import {View,SafeAreaView,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import {  } from 'react-navigation';
import config from './config'





export default class categorie extends React.Component{
  // Item({ title, id }) {
  //   return (
  //     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //       <Text style={styles.title}>{id}</Text>
  //     </View></TouchableOpacity>
  //   );
  // }
  constructor(props){
    super(props);
    this.state={
      DATA : [],
     }
}


  renderItem = ({item}) => {
    return(
      <TouchableOpacity>
          <Image 
              style={{width: 120, height: 100, resizeMode: 'cover', borderRadius: 20, marginTop: 20}}
              source={{uri: config.imageURL + item.image}}/>
              <Text style={{textAlign: 'center',position: 'absolute', top: 80, left: 0, right: 0, bottom: 10, justifyContent: 'center', alignItems: 'center', fontSize: 20, backgroundColor: 'white', borderRadius: 20, opacity: 0.7}}>
                  {item.nom}
              </Text>
      </TouchableOpacity>
    )
        
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

   render(){
       return(
       <SafeAreaView>
          <FlatList 
          horizontal
            data = {this.state.DATA}
            renderItem = {this.renderItem}
            ItemSeparatorComponent={() => <View style={{width: 10}}/>}
            keyExtractor={(item, index) => index.toString()}/>
                        
        </SafeAreaView>
       
       );
   }
}

const styles = StyleSheet.create({
 
  })