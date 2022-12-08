import React, {useCallback, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct, getCart} from '../api/product';
import {cartAction, cartSelectors} from '../features/product/cart';
import {productAction, productSelectors} from '../features/product/product';

const Home = () => {
  const cartList = useSelector(cartSelectors.selectAll);
  const productList = useSelector(productSelectors.selectAll);
  console.log('🤟💋   Home   cartList', cartList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCart();
    fetchProduct();
  }, []);

  const fetchCart = useCallback(async () => {
    try {
      // setLoading(true);
      const res = await getCart();
      if (res?.data) {
        dispatch(cartAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  }, []);

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getAllProduct();
      if (res?.data) {
        dispatch(productAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
    }
  }, []);

  const onAddToCart = async item => {
    try {
      // const res = await addToCart(item);
      dispatch(cartAction.addOne(item));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };

  const onDeleteCart = async item => {
    try {
      // const res = await addToCart(item);
      dispatch(cartAction.removeOne(item?.id));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>List product</Text>
        {productList?.map(el => {
          return (
            <View style={styles.item}>
              <Text>{el?.name}</Text>
              <Button title="Add" onPress={() => onAddToCart(el)} />
            </View>
          );
        })}
        <Text>List cart</Text>
        {cartList?.map(el => {
          return (
            <View style={styles.item}>
              <Text>{el?.name}</Text>
              <Button
                title="Delete"
                color={'red'}
                onPress={() => onDeleteCart(el)}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
});
