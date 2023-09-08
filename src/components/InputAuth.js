import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/colors/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function InputAuth({
  label,
  onChangeText,
  value,
  iconShowPassword,
  iconHidePassword,
  isShowText
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="relative">
      <Text className="text-white text-[18px] ml-2">{label}</Text>
      <TextInput
        placeholder={label}
        className="bg-white p-3 pl-5 text-base rounded-md mt-2 mb-2"
        style={styles.fontText}
        placeholderTextColor={Colors.placeholderColor}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isShowText && !showPassword}
      />
      <TouchableOpacity className="absolute right-4 top-[50%]" onPress={togglePasswordVisibility}>
        <Icon
          name={showPassword ? iconHidePassword : iconShowPassword}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins-Medium',
  },
});
