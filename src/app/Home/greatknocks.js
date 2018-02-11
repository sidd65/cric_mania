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
import {greatknocks} from 'cric_mania/src/lib/webservice'
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
  var ar=[]
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export  class GREATKNOCKS extends Component {
  constructor(props) {
      super(props);
      this.params = props.navigation.state.params;
      this.state = {
      imglist  : ds.cloneWithRows([]),
      id:this.params.cricket.id

  }
}
  componentDidMount = ()=> {
    greatknocks(key,this.state.id).then(d=>{
      ar.push(d.items)

      this.List(ar)
   }).catch(e=>{
       console.log(e);
   });
   AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
 }



  List=(ar)=>{
      return ar.map(function (thumb, index) {
         this.setState({imglist:ds.cloneWithRows(thumb),refreshing: true,})
      }.bind(this));
  }
  thumb=(t,index)=>{
    let uri=(t.snippet.thumbnails)?t.snippet.thumbnails.high.url:'https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg';
      return(
          <View key={index}>
              <Card style={{flexDirection:'column',backgroundColor:"#00838F"}}>
                  <TouchableOpacity onPress={()=>{_navigator.navigate('playvideo',{videoid:t.snippet.resourceId.videoId,title:t.snippet.title,listid:this.state.id,th:uri})}} >
                      <Image key={index} style={Styles.thumbimg} source={{uri:uri}}>
                      <Image  style={Styles.play}source={require('cric_mania/src/assets/images/icon.png')}/>
                      </Image>
                  </TouchableOpacity>
                  <View style={{justifyContent:'center'}} >
                  <Text style={Styles.gkheadings}>
                    {t.snippet.title}
                  </Text>
                  </View>
              </Card>
          </View>
      )
  }
  render() {

    return (
      <Container style={{backgroundColor:"#BDBDBD"}}>
      <Header style={{backgroundColor:'#006064'}}>
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
