import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../assets/colors';

const TopBar = ({onClickAdd, onClickMessage}) => {
  return (
    <View
      className="flex-row justify-between items-center px-2 py-1 bg-white"
      style={{
        elevation: 2,
      }}>
      <Text
        className="text-lg font-bold text-black"
        style={{fontFamily: 'Sacramento-Regular'}}>
        Social App
      </Text>
      <View className="flex-row">
        <TouchableOpacity onPress={onClickAdd} className="p-2">
          <Icon name="plus-square" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickMessage} className="p-2">
          <Icon name="facebook-messenger" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
