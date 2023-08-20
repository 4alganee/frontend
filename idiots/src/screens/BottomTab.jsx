import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {height} from '../../configs/globalStyles';
import {HomeRouter} from './HomeRouter';
import {Mypage} from './MypageScreen/MyPage';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6565',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'SUITVariable-Regular',
          marginBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="HomeRouter" component={HomeRouter} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};
