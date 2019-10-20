import React from 'react';
import { StyleSheet, View, Touchable ,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text  } from 'native-base';
export default class MenuView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('Home')}>
              <Image source={require('../../Images/house.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Acceuil</Text> 
          </ListItem>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('Panier')}>
              <Image source={require('../../Images/shop.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Panier en cours</Text> 
          </ListItem>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('Favoris')}>
              <Image source={require('../../Images/favoris.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Favoris</Text> 
          </ListItem>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('MagasinList')}>
              <Image source={require('../../Images/magasin.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Magasin</Text> 
          </ListItem>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('ProduitList')}>
              <Image source={require('../../Images/produit.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Produits</Text> 
          </ListItem>
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('Profile')}>
              <Image source={require('../../Images/account.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>Mon Compte</Text>
          </ListItem> 
          <ListItem noBorder style={styles.listeItemStyle} onPress={()=>this.props.navigation.navigate('About')}>
              <Image source={require('../../Images/about.png')} style={styles.imageStyle}/>
              <Text style={styles.textStyle}>About</Text> 
          </ListItem>
        </List>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:150,
    backgroundColor: 'white'
  },

  listeItemStyle:{
    flexDirection:'row',
  },
  imageStyle: {
    height:20,
    width:20,
  },
  textStyle: {
    marginLeft:15,
    fontSize:15,
    fontWeight: 'bold'
  }


});