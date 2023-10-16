import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {sizes} from '../constants/sizes';
import PagerView from 'react-native-pager-view';
import {Images} from '../assets/images';
import * as IconsSolide from 'react-native-heroicons/solid';
import * as IconsOuline from 'react-native-heroicons/outline';
import {Colors} from './../assets/colors/index';

const ItemPosts = ({item}) => {
  const pageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View
      className="bg-white rounded-md"
      style={{
        width: sizes.defaultWidth,
        marginBottom: sizes.defaultMargin,
      }}>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          {item.user_id.avatar ? (
            <Image
              className="w-10 h-10 rounded-full m-2"
              source={{uri: item.user_id.avatar}}
            />
          ) : (
            <Image
              className="w-10 h-10 rounded-full m-2"
              source={Images.user_default}
            />
          )}
          <Text className="text-base text-black font-bold">
            {item.user_id.name}
          </Text>
        </View>
        <Image source={Images.More} className="m-2" />
      </View>
      {item.content && <Text>{item.content}</Text>}
      <View>
        <PagerView
          ref={pageRef}
          style={{width: sizes.defaultWidth, height: sizes.defaultWidth}}
          onPageSelected={e => {
            setCurrentPage(e.nativeEvent.position);
          }}>
          {item.image.map((image, index) => {
            return (
              <Image
                key={index}
                source={{uri: image}}
                className="rounded-xl"
                style={{
                  width: '100%',
                  aspectRatio: 2,
                  backgroundColor: 'lightgray',
                  resizeMode: 'cover',
                }}
              />
            );
          })}
        </PagerView>
        <View
          className="flex-row self-center bottom-3"
          style={{position: 'absolute'}}>
          {item.image.length > 1
            ? item.image.map((_, index) => {
                return (
                  <View
                    key={index}
                    className={` w-2 h-2 mx-0.5 rounded-full ${
                      currentPage === index ? 'bg-yellow-400' : 'bg-gray-700'
                    } ${currentPage === index ? 'w-5' : 'w-2'}`}
                  />
                );
              })
            : null}
        </View>
      </View>
      <View className="flex-row justify-around items-center bg-gray-100">
        <TouchableOpacity
          onPress={() => {
            console.log('heart click: ', item);
          }}
          className="flex-1 justify-around items-center p-2 bg-white">
          <IconsSolide.HeartIcon color={'red'} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 justify-around items-center p-2 m-1 bg-white">
          <IconsSolide.ChatBubbleBottomCenterTextIcon color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 justify-around items-center p-2 bg-white">
          <IconsSolide.ShareIcon color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemPosts;
