import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase'

class ProductImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageUrl400x400 : ' ',
            PID : this.props.SKU
        }
        
        
    }

    getImages(PID){
    var url = 'Affiliate/data/'+PID+'/_productData/productBaseInfo/productAttributes/imageUrls/400x400'
    var images200x200Ref = firebase.database().ref(url).once('value').then((snapshot)=>{
        //alert(snapshot.val())
        this.setState({imageUrl400x400 : snapshot.val()})
    
    })
    }

    componentWillMount(){
     //Getting Product information from Flipkart and Saving to Firebase databaseURL
     //getProductInformationFromFlipkartAPI(PID)

     //get Images
     this.getImages(this.state.PID)
  
    }
    
    render(){

        return(

        <View style={{
          //backgroundColor : 'red', 
          //height : 200,
          margin :5,
          borderColor : '#4c8bfb',
          borderRadius : 2,
          paddingTop : 20,

          
        }}>
        
        <Image
        style = {{
        width : 400,
        height : 400,
        alignSelf:'center'
       }}
        source = {{uri: this.state.imageUrl400x400}}
        resizeMode = {Image.resizeMode.contain}

        />
        
        
        </View>
        )
    }


}


export default ProductImage