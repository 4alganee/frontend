import {createStackNavigator} from '@react-navigation/stack';
import {Custom} from './customScreen/Custom';
import {Detail} from './detailScreen/Detail';
import {Done} from './doneScreen/Done';
import {Home} from './homeScreen/Home';
import {Menu} from './menuScreen/Menu';
import {Order} from './orderScreen/Order';
import {Review} from './reviewScreen/Review';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalstyles, width, height } from '../../configs/globalStyles';
import { StyleSheet } from 'react-native';

export const HomeRouter = () => {
  const navigation = useNavigation();
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <stack.Screen name="Menu" component={Menu} />
      <stack.Screen name="Detail" component={Detail} 
        options={{
          headerShown: false,
          // headerLeft: () => (
          //   // <View style={styles.backButton}>
          //   //   <TouchableOpacity onPress={() => {
          //   //   navigation.goBack();
          //   //   }}>
          //   //     <Text style={[globalstyles.h2_3, styles.backText]}> {'<'} 123</Text>
          //   //   </TouchableOpacity>
          //   // </View>
          // )
        }}/>
      <stack.Screen name="Done" component={Done} />
      <stack.Screen 
        name="Order" 
        component={Order} 
        options={{headerShown: false}}
        />
      <stack.Screen name="Custom" component={Custom} />
      <stack.Screen name="Review" component={Review} />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8 * width,
  },
  backText: {
    color: 'red',
  },
});