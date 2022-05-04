import {Image} from 'react-native';
import 'react-native-gesture-handler';
import  React, {Component} from 'react';
import HomeScreen from '../source/src/Home';
import UserScreen from '../source/src/User';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Platform, SafeAreaView, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const Stack=createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name ='Home' component={HomeScreen}/>
            <Stack.Screen name ='User' component={UserScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}



