import React from 'react';
import { } from 'react-native';
import { NavigationContainer , StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './utils/colors';
import Home from './screens/Home';
import City from './screens/City';
import Profile from './screens/Profile';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.mainOrange,
          },
          headerTitleAlign:'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      >
        <Stack.Screen name='Home' component={tabNavigation}></Stack.Screen>
        <Stack.Screen options={({route}) => ({title:route.params.data.city.name})}  name='City' component={City}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

};




const tabNavigation = () => {
  return (
   
      <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarIcon: ({color,size}) => {
          let iconName;
          if(route.name==='Home'){
            iconName='md-home'
          }else if (route.name==='Profile'){
            iconName='ios-contact'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
       
       })}
       tabBarOptions={{
         activeTintColor:colors.mainOrange,
         inactiveTintColor:'grey'

       }}>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>
    
  )
}
export default App;