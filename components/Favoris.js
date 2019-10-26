import React from 'react';
import { View,Text, Button, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation'

class Favoris extends React.Component{
  
    render(){
        return(
            <View>
                 <Text>Favoris</Text>
            </View>
        )
    }
}
export default withNavigation(Favoris);