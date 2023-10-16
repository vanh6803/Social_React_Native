import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../assets/images/index';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../assets/colors/index';

// intro view
const slideData = [
  {
    id: 1,
    title: 'Be A Creative Person',
    content: 'Millions of peoples can’t  Wait to see what you have to share',
    image: Images.intro1,
  },
  {
    id: 2,
    title: '40,000+ Active Members',
    content: 'Explore your mates for gowth of your knowledge and personality',
    image: Images.intro2,
  },
  {
    id: 3,
    title: 'Create and Consume',
    content:
      'Start creating content, Craft Ideas and Explore more with our team',
    image: Images.intro3,
  },
];

export default function Intro() {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const nextScreen = () => {
    navigation.navigate('login');
  };

  return (
    <AppIntroSlider
      className="bg-neutral-900"
      data={slideData}
      renderItem={({item}) => {
        return (
          <View>
            <Image source={item.image} className="w-full" />
            <View className="items-center m-7">
              <Text
                className="text-white text-[24px]"
                style={{fontFamily: 'Poppins-Medium'}}>
                {item.title}
              </Text>
              <Text
                className="text-gray-300 text-[18px] m-2 tracking-widest text-center"
                style={{fontFamily: 'Poppins-Medium'}}>
                {item.content}
              </Text>
            </View>
          </View>
        );
      }}
      activeDotStyle={{backgroundColor: Colors.primary}}
      dotStyle={{backgroundColor: Colors.white}}
      showSkipButton
      onDone={nextScreen}
    />
  );
}
