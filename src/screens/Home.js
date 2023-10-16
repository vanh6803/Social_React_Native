import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TopBar from '../components/TopBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostsRequest} from '../redux/actions/PostsAction';
import {useNavigation} from '@react-navigation/native';
import {sizes} from '../constants/sizes';
import {Images} from './../assets/images/index';
import PagerView from 'react-native-pager-view';

const Home = () => {
  const pageRef = useRef(null);
  const flatListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const posts = useSelector(state => state.postsReducer.posts);
  const loading = useSelector(state => state.postsReducer.loading);
  const error = useSelector(state => state.postsReducer.error);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchPostsRequest());
    console.log('posts', posts.posts);
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Mặc định, hiển thị bottom tab khi màn hình Home có focus
      navigation.setOptions({
        tabBarVisible: true,
      });
    });

    return unsubscribe;
  }, [navigation]);

  let previousOffsetY = 0;

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > previousOffsetY) {
      // `offsetY` đang tăng, ẩn bottom tab
      navigation.setOptions({
        tabBarVisible: false,
      });
    } else if (offsetY < previousOffsetY) {
      // `offsetY` đang giảm, hiển thị bottom tab
      navigation.setOptions({
        tabBarVisible: true,
      });
    }

    // Lưu giá trị `offsetY` hiện tại cho lần so sánh tiếp theo
    previousOffsetY = offsetY;
  };

  return (
    <View className="flex-1">
      <TopBar />
      <FlatList
        className="flex-1"
        data={posts}
        ref={flatListRef}
        onScroll={handleScroll}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <View
              className="bg-white rounded-md"
              style={{
                width: sizes.defaultWidth,
                marginBottom: sizes.defaultMargin,
              }}>
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
              {item.content && <Text>{item.content}</Text>}
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
                            currentPage === index
                              ? 'bg-yellow-400'
                              : 'bg-gray-700'
                          } ${currentPage === index ? 'w-5' : 'w-2'}`}
                        />
                      );
                    })
                  : null}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
