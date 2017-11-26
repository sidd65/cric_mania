/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,ListView,Image,
  Text,NativeModules,
  View
} from 'react-native';
import YouTube from 'react-native-youtube'
import Styles from './styles.css'
var id='PLtineFwLo0jc_RT2VEtwSYP48796yAUep'
import { Container, Header, Title, Button, Left, Right, Body, Icon,Card,Content } from 'native-base';
var   part= 'snippet,contentDetails,statistics'
import {Bowl} from 'cric_mania/src/lib/webservice'
const INTERSTITIAL_UNIT_ID = '55ed2203a5244a39bf49ecfc21b49fe6';
const BANNERL_UNIT_ID = '89bf6d8453904a59956b037316036837';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'
var url='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLzLePeRhVTORttLpJYx3aiEs3N37fiuHD&Key='
var key='AIzaSyDUvJfXTiUg9cjT4c_LK_9xdP36U6loZLA'
var id='PL_fkSZyETSky7CtbOwi4gmzRrsvCWM5f7'
  var ar=[]
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let a = NativeModules.Wallpapermodule;

export  class bowling extends Component {
  constructor(props) {
      super(props);
      this.state = {
      imglist  : ds.cloneWithRows([]),
  }
}
  componentDidMount = ()=> {
    Bowl(key,id).then(d=>{
      ar.push(d.items)

      this.List(ar)
   }).catch(e=>{
       console.log(e);
   });
   AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
   AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
   AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
 }



  List=(ar)=>{
      return ar.map(function (thumb, index) {
        console.log("asaa111",thumb);

         this.setState({imglist:ds.cloneWithRows(thumb),refreshing: true,})
      }.bind(this));
  }
  thumb=(t,index)=>{
    let uri=(t.snippet.thumbnails)?t.snippet.thumbnails.high.url:'https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg';
      console.log("aaaaas",uri);
      return(
          <View key={index}>
              <Card style={{flexDirection:'column',alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{_navigator.navigate('playvideo',{videoid:t})}} >
                      <Image key={index} style={Styles.thumbimg} source={{uri:uri}}/>
                  </TouchableOpacity>
              </Card>
          </View>
      )
  }
  render() {
    return (
      <Container>
      <Header>
        <Left>
        </Left>
        <Body style={{alignItems:'center',marginLeft:50}}>
          <Title>PlayList</Title>
        </Body>

        <Right/>
      </Header>
      <ListView
              contentContainerStyle={Styles.walldetailsscroll}
              dataSource={this.state.imglist}
              renderRow={this.thumb}
              onEndReached={this.onEndReach}
          />
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
      </Container>
    );
  }
}
