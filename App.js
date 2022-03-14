/* eslint-disable no-undef */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs';
import { Restaurant, OrderDelivery } from './screens';
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

const App = () => {
  const [ loaded ] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if(!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='LandingHome'
        >
          <Stack.Screen name='LandingHome' component={Tabs} />
          <Stack.Screen name='Restaurant' component={Restaurant} />
          <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
};

export default App;