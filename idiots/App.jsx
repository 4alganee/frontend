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
import {Home} from './screens/homeScreen/Home';
import {Login} from './screens/Login';
import {Splash} from './screens/Splash';
import {HomeRouter} from './screens/HomeRouter';
import {Menu} from './screens/menuScreen/Menu';
import {Detail} from './screens/detailScreen/Detail';
import {Done} from './screens/doneScreen/Done';

const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Done" component={Done} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
