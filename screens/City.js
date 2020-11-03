import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView,Dimensions } from 'react-native';
import WeatherTime from '../components/WeatherTime';
import WeatherDay from '../components/WeatherDay';

const City = ({ route }) => {
    const { data } = route.params;
    console.log('from city', data);
    const WeatherTimeData = data.list.slice(0,9);
    console.log('slice data',WeatherTimeData);
    const WeatherDayData=data.list;
    const filteredDayData=WeatherDayData.filter(day=>{
        return day.dt_txt.includes('12:00:00')
    })
    const WeatherDays = filteredDayData.map((item,index) => (
        <WeatherDay data={item} key={index}></WeatherDay>

    ))
    const WeathersTimes = WeatherTimeData.map((item,index) => (
        <WeatherTime data={item} key={index}></WeatherTime>
    ))
    const description= data.list[0].weather[0].description;
    const temperature= Math.floor(data.list[0].main.temp - 273.15) ;
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'#6495ed' }}>

            <View style={styles.frontContainer}>
                <Text style={styles.cityName}>{data.city.name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.temperature}>{temperature}°</Text>
            </View>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.scrollView}
                    showsHorizontalScrollIndicator={false}
                >
                    {WeathersTimes}

                </ScrollView>

            </View>

            <View style={styles.daysContainer}>
                <ScrollView 
                >
                {WeatherDays}
          
                </ScrollView>
            </View>

            

        </View>

    )
}


const styles = StyleSheet.create({
    frontContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    scrollContainer: {
        width: '100%',
        flex: 1,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        alignItems: 'center'


    },
    scrollView: {
        alignItems:'center',

    },

    daysContainer: {
        flex: 3,
        width: '100%'

    },
    cityName: {
        fontSize: Dimensions.get('window').height > 600 ? 45 : 35,

    },
    description: {
        fontSize: Dimensions.get('window').height > 600 ? 20 : 15,
    },
    temperature: {
        fontSize: Dimensions.get('window').height > 600 ? 70 : 50,
        marginTop: 10
    }

})


export default City;