import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';


class NavigationBar  extends Component {
  render() {
    return (
      <View style={{
          backgroundColor : '#4c8bfb',

          height: PixelRatio.getPixelSizeForLayoutSize(20),
          flexDirection : 'row' 
         

        }}>

        <TouchableOpacity style={{
          flex : 1,
          flexDirection : 'column',
          justifyContent : 'center',
          padding : 15


        }}>
        <Icon name= {this.props.leftButton} size={PixelRatio.getPixelSizeForLayoutSize(10)} color="white" />
        </TouchableOpacity>

        <View
        style={{
          flex : 8,
          justifyContent :'center',
          marginLeft : 30
      }}>
        <Text
        style={{
          fontSize : 18,
          color : '#ffffff',
          alignSelf : 'flex-start',
          fontWeight : 'bold',
          fontStyle : 'italic'
          
        }}
        >{this.props.title}</Text>
        </View>


       <TouchableOpacity style={{
          flex : 1,
          flexDirection : 'column',
          justifyContent : 'center',
          padding : 15


        }}>
        <Icon name= {this.props.notificationIcon} size={PixelRatio.getPixelSizeForLayoutSize(8)} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{
          flex : 1,
          flexDirection : 'column',
          justifyContent : 'center',
          padding : 15


        }}>
        <Icon name= {this.props.rightButton} size={PixelRatio.getPixelSizeForLayoutSize(8)} color="white" />
        </TouchableOpacity>


      </View>

    );
  }
}

export default NavigationBar
