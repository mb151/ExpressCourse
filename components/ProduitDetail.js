import React from 'react'
import {View, Image, SafeAreaView,StyleSheet,FlatList, Picker, TouchableOpacity} from 'react-native'
import {Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import config from './config';
const axios = require('axios');


class ProduitDetail extends React.Component{

  constructor(props){
    super(props);
    this.state={
      qteStock : 0,
      prix: 0,
      total: null,
      DATA : [],
     }
}

increment = () => {
  this.setState((state) => {
    return {qteStock: state.qteStock + 1}   
  });
}

decrement = () => {
  this.setState((state) => {
    return {qteStock: state.qteStock - 1} 
  });
}

renderItem = ({item}) => {
    return(
      <View>
        <View style={{justifyContent:'center', flexDirection:'row'}}>
          <Image source={{uri: config.imageURL + item.image}} style={{ width: 300, height: 200,marginTop: 20,}} />
        </View>
        <View >
          <Text style={styles.text1}>{item.reference}</Text>
          <Text style={styles.text2}>Prix: {item.prix} dh /kg</Text>
          <View style={styles.container2}>
                <TouchableOpacity
                  onPress={this.increment}>
                  <Image source={require('../Images/add.png')} style={{width: 20, height: 20, marginBottom:50}}/>
                </TouchableOpacity>
                <Text>{this.setState({prix: item.prix})}</Text>
                <Text>{this.setState({idProd: item.idProd})}</Text>
                <TouchableOpacity
                  onPress={this.decrement}>
                  <Image source={require('../Images/substract.png')} style={{width: 20, marginBottom:50, marginTop: -10}}/>
                </TouchableOpacity>
              </View>
        </View>
        <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.buton} onPress={() => alert('Ajout au Panier Successful')}>
                    <Text style={styles.butonText}>Select</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
}

  componentDidMount(){
    const id = this.props.navigation.state.params.id;
    const url = config.apiURL + 'produitdetail/' + id ;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        DATA: responseJson.prod
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addToPanier = () =>{
    axios.post(config.apiURL+'savepanier', 
    { 
       total: this.state.total, 
     })
   .catch(error=> {
      if(response != null){
         alert('Ajout au Panier Successful');
      }else{
         alert('Something went wrong' + error);
      }
     
   })
  }


  totalMethode = () => {
   return this.state.total = this.state.qteStock * this.state.prix;
  }

    render= () =>{
      const total = this.totalMethode();
        return(
          <SafeAreaView>
            <View style={styles.container}>
              <Text style={{marginBottom: 20, left: 200, fontSize: 15}}>
                {this.state.qteStock}
              </Text> 
              
            </View>
           <Text style={{marginTop: 500, position: 'absolute', alignSelf: 'center'}}>Total: {this.state.total}</Text>
            <FlatList            
              data = {this.state.DATA}
              renderItem = {this.renderItem}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}/>
              
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  text1:{
    marginTop:50,
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',

},
text2:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
},
container2:{
  flexGrow:1,
  justifyContent:'center',
  alignItems:'center',
  marginBottom: 30,
},
containerbutton:{
  flexGrow:1,
  justifyContent:'center',
  alignItems:'center',
  marginBottom: 30,
  marginTop: -50,
},
container:{
  flexGrow:1,
  justifyContent:'center',
  alignItems:'center',
  marginTop: 380,
  position: 'absolute' ,
  textAlign: 'center'
},
inputBox:{
  width:100,
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
})


export default withNavigation(ProduitDetail);