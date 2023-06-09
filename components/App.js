import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import LogIn from './screens/LogIn';
import Events from './screens/Events/Events'
import Message from './screens/Message/Message'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import CreateEventScreen from './screens/CreateEvent/CreateEvent';
import ProfileScreen from './screens/Profile/Profile';

const firebaseConfig = {
  apiKey: "AIzaSyD8GM7Uhgu953-1Kuk8bWirSIrZ3YV2Pfo",
  authDomain: "event-planner-7514c.firebaseapp.com",
  projectId: "event-planner-7514c",
  storageBucket: "event-planner-7514c.appspot.com",
  messagingSenderId: "493811473479",
  appId: "1:493811473479:web:3e473e45182a3cbdf3a562",
  measurementId: "G-D0W72T4FD7"
};


const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
    <Stack.Screen name="Events" component={Events} />
  <Stack.Screen name="Login Or Register" component={HomeScreen} />
  <Stack.Screen name="Register" component={Register} /> 
  <Stack.Screen name="LogIn" component={LogIn} /> 
  <Stack.Screen name="Message" component={Message} /> 

  </Stack.Navigator>
  );
};

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    // Your Firebase code that depends on initialization, such as setting up listeners or initializing other Firebase services
  }, []);

  return (


  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Events" component={HomeStack} />
        <Tab.Screen name="Create Event" component={CreateEventScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;
