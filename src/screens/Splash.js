import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Images } from '../assets/images/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // check application is first open
    const checkFirstOpen = async () => {
      try {
        var isFirstOpen = await AsyncStorage.getItem('isFirstOpen');
        if(isFirstOpen === null){
          isFirstOpen = 'true'
        }
        console.log(isFirstOpen);
        if (isFirstOpen === 'true') {
          // is first open
          await AsyncStorage.setItem('isFirstOpen', 'false');
          setTimeout(() => {
            nextScreen('intro');
          }, 3000);
        } else {
          // not is first open
          setTimeout(() => {
            nextScreen('login');
          }, 3000);
        }
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    checkFirstOpen();
  }, []);

  function nextScreen (nameScreen) {
    navigation.navigate(nameScreen);
  }

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground
        source={Images.backgroundImage}
        resizeMode="cover"
        className="w-full h-full justify-center items-center ">
          <Image source={Images.Logo} />
          <Text className="text-white text-[50px]" style={{fontFamily:"Sacramento-Regular"}}>Social</Text>
      </ImageBackground>
    </View>
  );
}
