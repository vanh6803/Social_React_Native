import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../assets/images/index';
import InputAuth from '../components/InputAuth';
import ButtonAuth from '../components/buttonAuth';

export default function Register() {

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //next screen
  const nextScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-black">
        <ScrollView className="w-full ">
          <Image source={Images.bg_auth} className="w-full" />
          <Text
            className="text-white text-[28px] mt-2 self-center"
            style={styles.fontText}>
            Register
          </Text>
          <Text
            className="text-white text-[20px] self-center"
            style={styles.fontText}>
            Create a new account
          </Text>
          <View className="mt-5 px-5">
            <InputAuth label="Username" />
            <InputAuth label="Email" />
            <InputAuth
              label="Password"
              iconShowPassword="eye"
              iconHidePassword="eye-slash"
              isShowText={true}
            />
            <InputAuth
              label="Confirm Password"
              iconShowPassword="eye"
              iconHidePassword="eye-slash"
              isShowText={true}
            />
          </View>
          <View className="mt-5 mx-5">
            <ButtonAuth title="Register" />
          </View>
          <View className="flex-row justify-center mt-2">
            <Text className="text-[#c4c4c4] mr-1 text-base">
              Already have account?
            </Text>
            <TouchableOpacity onPress={() => nextScreen('login')}>
              <Text className="text-white text-base ">Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins-Medium',
  },
});
