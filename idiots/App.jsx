import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Splash} from './src/screens/Splash';
import {Login} from './src/screens/loginScreen/Login';
import {Home} from './src/screens/homeScreen/Home';
import {Menu} from './src/screens/menuScreen/Menu';
import {Detail} from './src/screens/detailScreen/Detail';
import {Done} from './src/screens/doneScreen/Done';
import {Order} from './src/screens/orderScreen/Order';
import {Custom} from './src/screens/FramePicture.jsx/Custom';
import {Review} from './src/screens/reviewScreen/Review';
import {BottomTab} from './src/screens/BottomTab';

const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
