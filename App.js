/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet,View,TouchableOpacity,Image,SafeAreaView,ScrollView,Text} from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import MenuView from './components/Menu/MenuView'
import MagasinList from "./components/MagasinList";
import CategorieList from './components/CategorieList'
import Favoris from './components/Favoris'
import Panier from './components/Panier'
import ProduitList from './components/ProduitList';
import About from './components/About'




class App extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render(){
  return (
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./Images/menu.png')}
            style={{ width: 30, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
  );
  }
}

/*Stack navigator qui regroupe les routes vers les differents screens*/
const StackNav = createStackNavigator({
  Home: 
  {
    screen: Home, 
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

  Profile: 
  {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

  Panier: 
  {
    screen: Panier,
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

  Favoris: 
  {
    screen: Favoris,
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

  CategorieList: {screen: CategorieList,navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

  MagasinList: 
  {
    screen: MagasinList, 
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},

ProduitList: 
{
  screen: ProduitList, 
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},
About: 
{
  screen: About, 
    navigationOptions: ({navigation}) => ({
    headerLeft: <App navigationProps={navigation}/>,
    headerStyle: {
      backgroundColor: '#018786',
    },
    headerTintColor: '#fff',
  })
},
})


const AppDrawerNavigator = createDrawerNavigator({
  StackNav: StackNav,
},{
    contentComponent:props=>
    <SafeAreaView style={{flex:1}}>
      <View style={{height:10,backgroundColor:'white'}}>
        <Image source={require('./Images/logo.jpg')} style={{height:200,width:280, marginTop:-5 }}/>
      </View>
      <ScrollView>
        <MenuView {...props}/>
      </ScrollView>
    </SafeAreaView>
  })

const AppSwitchNavigator = createSwitchNavigator({
  //Login: Login,
  //Signup: Signup,
  Home: AppDrawerNavigator,
})

export default createAppContainer(AppSwitchNavigator);
