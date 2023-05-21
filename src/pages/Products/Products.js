import React, {useState,useEffect} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import styles from './Products.style';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import SearchBar from '../../components/SearchBar/SearchBar';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  const [dataList, setDataList] = useState(data);


    useEffect(() => {
      setDataList(data)
  }, [data])


  // To update dataList when search
  const findProduct = text => {
    const filteredData = data.filter(
      item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
    );
    setDataList(filteredData);
  };

  // To go to detail page
  const handleProductSelect = id => {
    navigation.navigate('DetailScreen', {id});
  };

  // Flatlistin içinde renderItem ile döndürdğümüz fakeapiları ProductCard componentinin içindeki değerlere yolluyoruz.
  // To render product cards
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  // Loading animation
  if (loading) {
    return <Loading />;
  }
  // Error animation
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <SearchBar findProduct={findProduct} />
      </View>
      <FlatList data={dataList} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
