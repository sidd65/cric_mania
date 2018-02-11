import React from 'react';
import { StyleSheet, Dimensions ,Platform} from "react-native";
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
module.exports = StyleSheet.create({
  headings:{
    fontSize:25,
    color:'#fff'

  },
  gkheadings:{
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginTop:10
  },
  nofav:{
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      marginTop:50
  },
  nofavtext:{
      fontWeight:'bold',
      alignItems:'center',
      fontSize:20

  },
  headingview:{
    width:width,
    borderWidth:1,
    alignItems:'center'
  },
  WebViewContainer: {

    marginTop: 0,

  },
  thumview:{
    width:width,
    height:height/3.8,
  },
  thumbimg:{
    width:width,
    height:height/3.8,
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    backgroundColor:'#006064'
  },
  play:{
    width:50,
    height:50
  },
  title:{
    fontWeight:'bold',
    fontSize:17,
    width:180
  },
  playtitle:{
    fontWeight:'bold',
    fontSize:17,
    width:180,
    color:'#fff'
  },
  listtitle:{
    fontWeight:'bold',
    fontSize:17,
    width:180,
    marginLeft:10,
    color:'#fff'
  },
  recommended:{
      fontWeight:'bold',
      fontSize:17,
      marginLeft:10,

  },
  playvideolist:{
      width:width/2.5,
      height:height/6.5,
      resizeMode:'stretch'
  },
  share:{
    width:20,
    height:20,
    marginLeft:80,
  },
  heart:{
    width:20,
    height:20,
    marginLeft:20,
  },
  dis:{
    width:15,
    fontSize:17
  },
  playvideoliststyle:{
  flexDirection:'column',
  borderBottomWidth:1,
  borderColor:'#00838F',
  marginLeft:10,
  backgroundColor:'#00838F',
  padding:5

  },
  playvideotouch:{
    height:height/5,
  },
  viewmore:{
    marginLeft:10,


  }

});
