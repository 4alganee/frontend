import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeRouter} from './HomeRouter';
import {Mypage} from './MypageScreen/MyPage';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeRouter" component={HomeRouter} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};
