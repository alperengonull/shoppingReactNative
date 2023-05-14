import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './Products.style';
import {API_URL} from '@env';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

const Products = () => {

    const {loading,data,error} = useFetch(API_URL)

  // Flatlistin içinde renderItem ile döndürdğümüz fakeapiları ProductCard componentinin içindeki değerlere yolluyoruz.
  const renderProduct = ({item}) => <ProductCard product={item} />;


  // Ürünler gelmeden önce activity spinner atıyor.
  if (loading) {
    return <ActivityIndicator size={'large'} color={'red'} />;
  }

  // Eğer yolladığımız URL de bir hata varsa bize error çıkartıyor.
  if(error){
    return <Text> {error} </Text>
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
