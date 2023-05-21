import {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
   container:{flex:1},
   image:{
    width:deviceSize.width,
    height:deviceSize.height/3,
    resizeMode:'contain',
    backgroundColor:'white',
   },
   bodyContainer:{
    padding:10,
   },
   title:{
    fontWeight:'bold',
   },
   desc:{
    fontStyle:'italic',
    marginVertical:5,
   },
   price:{
    fontWeight:'bold',
    color: '#f00',
    fontSize:22,
    textAlign:'right'
   }
});