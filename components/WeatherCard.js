import React from 'react';
import { View, StyleSheet, Text ,TouchableOpacity,Platform } from 'react-native';
import {colors} from '../utils/colors';

const WeatherCard = (props) => {
    
    const goToCity = () => {
        props.navigation.navigate('City',{
            title:props.title,
            data: props.data ,
        })
    }
    return (
        <TouchableOpacity onPress={goToCity} style={styles.card}>
            <Text style={styles.title}>{props.data.city.name}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    card: {     
        height: 60,
        width: '80%',
        backgroundColor: Platform.OS ==='ios' ? 'white' : colors.mainOrange,
        shadowColor:'black',
        shadowRadius:2,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:12,
        borderRadius:8,
    },
    title: {
        color:Platform.OS ==='ios' ? 'black' : 'white',
        fontSize:22,
    }

})

export default WeatherCard