//import {createStackNavigator} from 'react-navigation-stack';
//import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';


import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SeasonsEpisodesVideo from '../components/SeasonsEpisodesVideo/index.js'
import Home from '../screen/home.js';
import SeriesList from '../screen/seriesList';


//const screens = {
//  Home: {
//    screen: Home
//  }
//}
//
//const HomeStack = createStackNavigator(screens);
//
//export default createAppContainer(HomeStack);

//const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Root = () =>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        initalRoute="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        style={{backgroundColor: "#000"}}
        barStyle={{backgroundColor: "#0f0f0f" , padding: 4}}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            )
          }}
        />
        <Tab.Screen 
          name="Series" 
          component={SeriesList} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="television" color={color} size={28} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Root;