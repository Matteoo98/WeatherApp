import React from 'react';
import {View , Text , Button , StyleSheet, Image} from 'react-native';


const WeatherIcon = props => {
    const url = `http://openweathermap.org/img/wn/${props.code}@2x.png`
    return <Image style={{width:50,height:50}} source={{uri:url}}></Image>
}
export default WeatherIcon;