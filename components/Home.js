import React from 'react'
import ProduitsAlea from './ProduitsAlea'
import Categorie from './Categorie'
import { View } from 'react-native'

export default class Home extends React.Component{
  render(){
    return(
      <View>
      <Categorie/> 
      <ProduitsAlea/>
      </View>
    )
  }
}