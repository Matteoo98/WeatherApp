import React from 'react';
import {View , Text , Button , StyleSheet, ScrollView  , Dimensions} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';


const WeatherDay = props =>{
    const dayOfWeek=['domenica','lunedì','martedì' , 'mercoledì','giovedì','venerdì','sabato']
    const indexDay= new Date(props.data.dt_txt).getDay();
    const day= dayOfWeek[indexDay];
    const temperature = Math.floor(props.data.main.temp - 273.15) ;
    const codeIcon=props.data.weather[0].icon;


    return (
        <View style={styles.container}>
            <View style={{width:100}}>
                <Text style={styles.day} >{day}</Text>
            </View>
            
            <WeatherIcon code={codeIcon}></WeatherIcon>
            <View style={{width:50}}>
                <Text style={styles.temperature}>{temperature}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,

    },
    day:{
        marginLeft:5,
        fontSize: Dimensions.get('window').height > 600 ? 21 : 17

    },
    temperature:{
        marginRight:10,
        fontSize:Dimensions.get('window').height > 600 ? 22 : 18
    }

})



export default WeatherDay;