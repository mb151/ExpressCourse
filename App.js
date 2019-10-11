/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet,View,TouchableOpacity,Image,SafeAreaView,ScrollView} from 'react-native'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'
import { createStackNavigator } from 'react-navigation-stack';
import MenuView from './components/Menu/MenuView'




class App extends React.Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render(){
    //const {navigate} = this.props.navigation;
  return (
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./Images/menu.png')}
            style={{ width: 30, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
  );
  }
}

const Home_StackNavigator = createStackNavigator({
  Home : {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: <App navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#018786',
      },
      headerTintColor: '#fff',
    })
  }
})

const Profile_StackNavigator = createStackNavigator({
  Profile : {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      headerLeft: <App navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#018786',
      },
      headerTintColor: '#fff',
    })
  }
})


const AppDrawerNavigator = createDrawerNavigator({
  NavScreenHome: {
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  NavScreenProfile: {
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile'
  }
}
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
  },
  {
    contentOptions: {
      labelStyle: { color: 'red' }
    }
  
})

const AppSwitchNavigator = createSwitchNavigator({
  //Login: Login,
  //Signup: Signup,
  Home: AppDrawerNavigator,
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default createAppContainer(AppSwitchNavigator);
