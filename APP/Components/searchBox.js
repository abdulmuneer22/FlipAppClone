
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class SearchBox extends Component{
    render(){
        return(
        
        <View style={{
          backgroundColor : '#4c8bfb', 
          //height : 40,
          //margin :10,
          borderColor : '#4c8bfb',
          borderRadius : 2,
          paddingTop : 20,

          
        }}>

        <View style={{
            padding : 8, 
            borderColor : 'white',
            backgroundColor :'white',
            borderWidth : 1,
            margin : 4,
            flexDirection : 'row'
            
        }}>

        <View style={{
            flex : 1,
            alignSelf : 'flex-start'
        }}>        
        <Icon name= 'ios-search' 
        size={PixelRatio.getPixelSizeForLayoutSize(7)} 
        color="black" 
        />
        </View>

        <Text style = {{flex : 6}}>
        Search for Products,Brands and More
        </Text>

        

        
        
        </View>

        
        
      </View>
        
        )
    }
}

export default SearchBox