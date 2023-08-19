import {createStackNavigator} from '@react-navigation/stack';
import {Custom} from './customScreen/Custom';
import {Detail} from './detailScreen/Detail';
import {Done} from './doneScreen/Done';
import {Home} from './homeScreen/Home';
import {Menu} from './menuScreen/Menu';
import {Order} from './orderScreen/Order';
import {Review} from './reviewScreen/Review';

export const HomeRouter = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <stack.Screen name="Menu" component={Menu} />
      <stack.Screen name="Detail" component={Detail} />
      <stack.Screen name="Done" component={Done} />
      <stack.Screen name="Order" component={Order} />
      <stack.Screen name="Custom" component={Custom} />
      <stack.Screen name="Review" component={Review} />
    </stack.Navigator>
  );
};
