import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//importing navigation bar
import NavigationBar from './Components/navigationBar'
import SearchBox from  './Components/searchBox'
import { LoginToFirebase, getProductInformationFromFlipkartAPI , getImages , getProductTitle} from './helperFunctions'
import ProductImage from './Components/productImage'

const email = 'test@test.com'
const password = '12345678'
const PID = 'MOBEBY3WGYVHUXUE'

// importing firebase and intitializing
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyD9Bgw6eYQFVDLy1D_1BnnNkGBf9JmWKKA",
    authDomain: "affiliateapp-3c038.firebaseapp.com",
    databaseURL: "https://affiliateapp-3c038.firebaseio.com",
    storageBucket: "affiliateapp-3c038.appspot.com",
    messagingSenderId: "816738321945"
};

class APP extends Component { 

 constructor(){
     super();
     
     this.state = {
       imageUrl400x400 : ' ',
       title : ''
     }

     firebase.initializeApp(config);
     LoginToFirebase(email,password)

 }


componentWillMount(){
  getProductInformationFromFlipkartAPI(PID)
  var url = 'Affiliate/data/'+PID+'/_productData/productBaseInfo/productAttributes/title'
    var title = firebase.database().ref(url).once('value').then((snapshot)=>{
        
        this.setState({title : snapshot.val()})
        
        
})
    
}



  render() {
    return (
     <View>
     <NavigationBar 
     leftButton='ios-menu' 
     rightButton='ios-cart'
     title="Flipkart"
     notificationIcon='ios-notifications'
     />

     <SearchBox/>


     <ProductImage SKU = {PID} {...this.props}/>
     <View>
     <Text>
     {this.state.title}
     </Text>
     </View>

     
     </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default APP
