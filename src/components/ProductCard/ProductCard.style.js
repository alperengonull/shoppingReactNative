import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  body_container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B12704',
    textAlign: 'center',
  },
});
