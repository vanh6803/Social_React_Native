import React, {useLayoutEffect} from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import Profile from './Profile';
import Notification from './Notification';
import {StyleSheet} from 'react-native';

const Tab = AnimatedTabBarNavigator();

const BottomNav = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
    appearance={{
      whenActiveShow: 'icon-only'
    }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
