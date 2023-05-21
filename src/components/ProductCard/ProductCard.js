import {SafeAreaView, View, Text, Image,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductCard.style';

const ProductCard = ({product,onSelect}) => {

  

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
       <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}> {product.title} </Text>
        <Text style={styles.price}> {product.price} TL </Text>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
