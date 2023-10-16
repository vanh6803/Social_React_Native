import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TopBar from '../components/TopBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostsRequest} from '../redux/actions/PostsAction';
import {useNavigation} from '@react-navigation/native';
import {sizes} from '../constants/sizes';
import {Images} from './../assets/images/index';
import PagerView from 'react-native-pager-view';
import ItemPosts from '../components/ItemPosts';

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
    } else if (offsetY < previousOffsetY || offsetY < 10) {
      // `offsetY` đang giảm, hiển thị bottom tab
      navigation.setOptions({
        tabBarVisible: true,
      });
    }
    console.log(previousOffsetY);
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
          return <ItemPosts item={item} />;
        }}
      />
    </View>
  );
};

export default Home;
