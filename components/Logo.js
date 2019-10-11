import React from 'react'
import {Image,StyleSheet,View,Text} from 'react-native'
import {  } from 'native-base'

export default class Logo extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../Images/logo.jpg')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    imageStyle:{
        width:100,
        height:100,
        borderRadius:50,
    },
    text:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
    },
})