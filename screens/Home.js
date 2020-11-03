import React , {useState} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView, Button , Dimensions,Platform} from 'react-native';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const APIKEY = '5b13d0156f1d33e7f580f96972b7c1f3';

export default class App extends React.Component {
  state = {
    cities: [],
    visible: false,
  }


  openModal = () => {
    this.setState({
      visible: true,
    })

  }
  closeModal = () => {
    this.setState({
      visible: false,
    })

  }
  addCity = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&lang=it`
    ).then(data => {
      this.setState(prevState => {
        return {
          cities: prevState.cities.concat(data.data)
        };
      }, this.closeModal());
    }).catch(error => {
      console.log(error)
    });



  };
  render() {
    let cities=<Text>Loading</Text>
    if(this.state.cities){
      console.log(this.state.cities)
      cities = this.state.cities.map((city, index) => (
      <WeatherCard 
       navigation={this.props.navigation} 
       key={index} 
       //title={city.name}
       data={city}
      ></WeatherCard>
    ));

    }
    
    return (
      <View style={styles.container}>
        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.closeModal}></AddCityModal>

        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}

          <RoundButton plusButton={true} onPress={this.openModal}></RoundButton>


        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,

  }




});