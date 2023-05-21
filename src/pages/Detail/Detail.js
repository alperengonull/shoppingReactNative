import { SafeAreaView,View, Text,Image } from 'react-native'
import React from 'react'
import styles from './Detail.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading,data,error} = useFetch(`${Config.API_URL}/${id}`);
  console.log(id);

   // Ürünler gelmeden önce activity spinner atıyor.
   if (loading) {
    return <Loading />;
  }

  // Eğer yolladığımız URL de bir hata varsa bize error çıkartıyor.
  if(error){
    return <Error />;
  }


  return (
    <SafeAreaView style={styles.container}>
     <Image source={{uri:data.image}} style={styles.image}/>
      <View style={styles.bodyContainer}>
      <Text style={styles.title}> {data.title} </Text>
     <Text style={styles.desc}> {data.description} </Text>
     <Text style={styles.price}> {data.price} TL </Text>
      </View>
    </SafeAreaView>
  )
}

export default Detail;
