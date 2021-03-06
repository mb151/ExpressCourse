import React from 'react'
import {View, Text, Image,StyleSheet,StatusBar,Linking} from 'react-native'

export default class About extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <StatusBar style={styles.statubar}/>
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                    <Image style={styles.image} source={require('../Images/ano.png')}/>
                </View>
                <Text style={styles.text1}>Bachir Ali Mahamadou Aminou</Text>
                <Text style={styles.text2}>Software Engineer</Text>
                
                <View style={styles.container2}>
                    <Image style={styles.ImageStyle} source={require('../icons/telephone.png')}/>
                    <Text style={styles.text3} onPress={() => Linking.openURL('tel:${0630511280}')}>0630511280</Text>
                </View>
                <View style={styles.container2}>
                    <Image style={styles.ImageStyle} source={require('../icons/mail.png')}/>
                    <Text style={{color:'black', fontSize:20, paddingLeft: 10}} onPress={() => Linking.openURL('mailto:elamineelbachir@gmail.com')}>elamineelbachir@gmail.com</Text>
                </View>
                <View style={styles.container2}>
                    <Image style={styles.ImageStyle} source={require('../icons/github.png')}/>
                    <Text style={styles.text3} onPress={() => Linking.openURL('https://github.com/mb151')}>https://github.com/mb151</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        //flexDirection:'row',
        //justifyContent: 'center',
        backgroundColor: '#018786'
    },
    image:{
        width: 200, 
        height: 200,
        borderRadius: 100,
        marginTop: 20,
    },
    statubar:{
        backgroundColor: '#018786',
    },
    text1:{
        marginTop:20,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color: 'white'

    },
    text2:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color: 'white'
    },
    container2:{    
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        borderRadius: 10,
        margin: 5, 
        marginTop:35,
        backgroundColor:'white'
    },
    text3:{
        left:15,
        fontSize:20,
        color:'black',
        paddingRight: 1,
    },
    ImageStyle: {
        padding: 15,
        margin: 20,
        height: 25,
        width: 27,
        resizeMode: 'stretch',
      },
  });