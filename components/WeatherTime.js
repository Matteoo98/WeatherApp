import React from 'react';
import {View , Text , Button , StyleSheet, ScrollView,Dimensions } from 'react-native';
import WeatherIcon from '../components/WeatherIcon';


const WeatherTime = props =>{
    console.log('data from weathertimecomponent',props.data)
    const temperature = Math.floor(props.data.main.temp - 273.15) ;
    const time = new Date(props.data.dt_txt).getHours();
    const codeIcon=props.data.weather[0].icon;
    const timeFontSize = Dimensions.get('window').height > 600 ? 18 : 14
    const tempFontSize = Dimensions.get('window').height > 600 ? 22 : 18
    return (
        <View style={styles.container}>
            <Text style={{fontSize:timeFontSize}}>{time}</Text>
            <WeatherIcon code={codeIcon}></WeatherIcon>
            <Text style={{fontSize:tempFontSize}}>{temperature}°</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:22,
        justifyContent:'space-around',
        height:'100%',
        alignItems:'center',

    }

})



export default WeatherTime;