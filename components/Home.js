import React from 'react'
import ProduitsAlea from './ProduitsAlea'
import CategorieList from './CategorieList'
import { View,ScrollView } from 'react-native'
import {  } from 'react-native-gesture-handler'

export default class Home extends React.Component{
  render(){
    return(
      <ScrollView>
        <CategorieList/> 
        <ProduitsAlea/>
      </ScrollView>
    )
  }
}