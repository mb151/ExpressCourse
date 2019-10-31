import React from 'react'
import {Text, View} from 'react-native'
import { withNavigation } from 'react-navigation';
import config from './config';

class ProduitDetail extends React.Component{
    render(){
        return(
            <View>
                <Text>ProduitDetail {this.props.navigation.state.params.id}</Text>
            </View>
        )
    }
}

export default withNavigation(ProduitDetail);