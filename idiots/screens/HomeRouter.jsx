import {createStackNavigator} from '@react-navigation/stack';
import {Detail} from './detailScreen/Detail';
import {Done} from './doneScreen/Done';
import {Home} from './homeScreen/Home';
import {Menu} from './menuScreen/Menu';
const Stack = createStackNavigator();
export const HomeRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Done" component={Done} />
    </Stack.Navigator>
  );
};
