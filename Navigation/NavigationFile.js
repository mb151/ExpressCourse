import React from 'react'
import {View, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import MenuView from '../components/Menu/MenuView'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Signup from '../components/Signup'

class NavigationFile extends React.Component{
  render(){
    return(
     <AppDrawerNavigation/>
    );
  }

}

// const CustomDrawerComponent = (props) => (
//   <SafeAreaView style={{flex: 1}}>
//     <ScrollView>
//       <DrawerItems {...props}/>
//     </ScrollView>
//   </SafeAreaView>
// );

const AppDrawerNavigation = createDrawerNavigator({
  Home: {screen : Home},
  Profile: {screen: Profile}
},{
  // contentComponent:props=>
  // <SafeAreaView style={{flex:1}}>
  //   <View style={{height:150,backgroundColor:'white'}}>
  //     <Image source={require('../Images/moi.jpg')} style={{height:165,width:280}}/>
  //   </View>
  //   <ScrollView>
  //     <DrawerItems {...props}/>
  //   </ScrollView>
  // </SafeAreaView>
});

const AppSwitchNavigator =  createSwitchNavigator({
  Login: { screen: Login},
  Signup: { screen: Signup},
  Home: {screen: AppDrawerNavigation},
});


export default createAppContainer(AppSwitchNavigator);