import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,StatusBar} from 'react-native'
import Logo from './Logo'
import {Toast} from 'native-base';
import config from './config'
const axios = require('axios');


class Login extends Component {
   state = {
      email : null,
      password :null,
      showToast: false,
   }


   login(){
     axios.post(config.apiURL+'login', 
     { 
        email: this.state.email, 
        password:this.state.password
      })
    .then(response=()=>this.props.navigation.navigate('Home')
  )
    .catch(error=> {
      // handle error
      alert('Mot de passe ou email incorrect' + error);
    })
     
    }


   render() {
      const {navigate} = this.props.navigation;
      return (
         <View style = {styles.container}>
            <StatusBar backgroundColor="#4db6ac"/>
            <Logo/>
            <Text style={styles.text}>Connectez-Vous !</Text>
            <View style={styles.container2}>
            <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#212121'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#212121'
                    maxLength={40}
                    onChangeText={(password) => this.setState({password})}
                />
            <TouchableOpacity style={styles.buton}
                     onPress={() => this.login() /*this.props.navigation.navigate('Home')*/}>
                    <Text style={styles.butonText}>Sign in</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.signupTextCont}>
               <Text style={styles.signupText}>Don't have an account yet ?</Text>
               <TouchableOpacity onPress={() => navigate('Signup')}>
                  <Text style={styles.signupButton}> Signup</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      flexGrow:1,
      backgroundColor: '#018786',
      alignItems:'center',
      justifyContent: 'center',
   },
   signupTextCont:{
      flexGrow:1,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingVertical:16,
      flexDirection: 'row',
   },
   signupText:{
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16,
   },
   signupButton:{
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
   },
   container2:{
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center',
  },
   inputBox:{
      width:300,
      borderRadius: 20,
      backgroundColor:'rgba(255,255,255,0.7)',
      paddingHorizontal:16,
      fontSize: 18,
      color: '#212121',
      marginVertical:10,
   },
   buton:{
      width: 300,
      backgroundColor: '#004d40',
      borderRadius: 20,
      marginVertical: 10,
      paddingVertical: 13,
  },
  butonText:{
   fontSize:20,
   fontWeight: '500',
   color: '#fff',
   textAlign:'center',
   },
   text:{
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 15,
  },
})