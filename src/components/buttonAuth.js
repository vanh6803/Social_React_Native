import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Images} from '../assets/images';

export default function ButtonAuth({
  onPressed,
  title,
  btnStyle,
  icon,
  textStyle,
}) {
  return (
    <View className="">
      <TouchableOpacity
        className="bg-sky-400 p-3 justify-center items-center rounded-3xl relative"
        onPress={onPressed}
        style={btnStyle}>
        <Text
          className="text-white text-xl"
          style={[styles.fontText, textStyle]}>
          {title}
        </Text>
        {icon && (
          <Image
            source={icon}
            className="absolute top-[50%] left-4 w-[24] h-[24]"
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins-Medium',
  },
});
