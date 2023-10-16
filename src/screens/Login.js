import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../assets/images/index';
import InputAuth from '../components/InputAuth';
import ButtonAuth from '../components/buttonAuth';

const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleChangeText = text => {
    console.log(text);
  };

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
            Welcome
          </Text>
          <Text
            className="text-[20px] text-[#C4C4C4]  self-center"
            style={styles.fontText}>
            Login to your account
          </Text>

          <View className="w-full mt-7 px-5 ">
            <InputAuth label="Email" onChangeText={handleChangeText} />
            <InputAuth
              label="Password"
              onChangeText={handleChangeText}
              iconShowPassword="eye"
              iconHidePassword="eye-slash"
              isShowText={true}
            />
            <Text
              className="text-red-500 text-base mt-1 self-end mr-2"
              style={styles.fontText}>
              Forgot password?
            </Text>
          </View>

          <View className="m-7">
            <ButtonAuth
              title="Login"
              onPressed={() => {
                nextScreen('bottomNav');
              }}
            />
            <View className="flex-row justify-center items-center my-2">
              <View className="bg-white h-[1px] w-[30%] " />
              <Text className="text-white text-base p-2">Or continue</Text>
              <View className="bg-white h-[1px] w-[30%]" />
            </View>
            <ButtonAuth
              title="Login with google"
              onPressed={() => {
                console.log('haha');
              }}
              icon={Images.google}
              btnStyle={styles.btnLoginGG}
              textStyle={styles.btnText}
            />
          </View>
          <View className="flex-row justify-center mt-2 ">
            <Text className="text-[#c4c4c4] mr-1 text-base">
              Don`t have account?
            </Text>
            <TouchableOpacity onPress={() => nextScreen('register')}>
              <Text className="text-white text-base ">Create Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Poppins-Medium',
  },
  btnLoginGG: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  btnText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Login;
