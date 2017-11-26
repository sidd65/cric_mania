/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,ListView,Image,Dimensions,Share,AsyncStorage,
  Text,
  View
} from 'react-native';
import YouTube from 'react-native-youtube'
import Styles from './styles.css'
var id='PLtineFwLo0jc_RT2VEtwSYP48796yAUep'
import { Container, Header, Title, Button, Left, Right, Body, Icon,Card,Content } from 'native-base';
var   part= 'snippet,contentDetails,statistics'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import {greatknocks} from 'cric_mania/src/lib/webservice'
var key='AIzaSyDUvJfXTiUg9cjT4c_LK_9xdP36U6loZLA'
let height=Dimensions.get('window').height;
let fav=[];
var ar=[]
let img=require('cric_mania/src/assets/images/heart.png')
let img2=require('cric_mania/src/assets/images/favorite.png')
import Fav from './favourites'
export  class playvideo extends Component {
    constructor(props){
      super(props)
      this.params = props.navigation.state.params;
      this.state={
        imglist  : ds.cloneWithRows([]),
        videoid:this.params.videoid,
        title:this.params.title,
        listid:this.params.listid,
        uri:this.params.th,
        t:false,
         height: 215,
        f:false,
        getdata:this.params.getdata,
        ful:true
      }
    }
    List=(ar)=>{
        return ar.map(function (thumb, index) {
          console.log("asaa111",thumb);

           this.setState({imglist:ds.cloneWithRows(thumb),refreshing: true,})
        }.bind(this));
    }
    thumb=(t,index)=>{
      let uri=(t.snippet.thumbnails)?t.snippet.thumbnails.medium.url:'https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg';
        console.log("aaaaas",uri);
        return(
          <View key={index} >
              <View style={Styles.playvideoliststyle}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{_navigator.navigate('playvideo',{videoid:t.snippet.resourceId.videoId,title:t.snippet.title,listid:this.state.id,th:uri})}} >
                      <Image key={index} style={Styles.playvideolist} source={{uri:uri}}/>
                      <Text style={Styles.listtitle}>
                        {this.state.title}
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
        )
    }

    shareimage=()=>{
      let msg='https://www.youtube.com/watch?v='+this.state.videoid
      Share.share({
     message: 'Foun this Great video\n'+msg +'on this Fantastic cricketing app \n'+msg,
     title: 'Best title ever!',
     url: 'http://codingmiles.com'
   })
    }

    deleterec = async() => {
        let remwallpaper=[]
        let updatedwall=[]


                     _fav=_fav.filter((i)=>i.u!=this.state.videoid)


                        //updatedwall=remwallpape
                await  AsyncStorage.setItem('favt', JSON.stringify(_fav));


         }
    Addtoafv=()=>{

        _fav.push({u:this.state.videoid,title:this.state.title,thumbnails:this.state.uri,listid:this.state.listid})
        console.log("aaaaa111111",_fav);
        AsyncStorage.setItem('favt',JSON.stringify(_fav));

        this.setState({t:!this.state.t})
    }
    getasynclist=async()=>{
        let myArray = await AsyncStorage.getItem('favt');
               if (myArray !== null) {
        // We have data!!
        fav=JSON.parse(myArray)
    }
    for (var i = 0; i < fav.length; i++)
    {
            if (this.state.videoid == fav[i].u)
            {
                this.setState({f:true})

            }
    }

  }
    componentDidMount = ()=> {
      console.log("aaa",Fav);
        greatknocks(key,this.state.listid).then(d=>{
        ar.push(d.items)

        this.List(ar)
     }).catch(e=>{
         console.log(e);
     });
     this.getasynclist()
     setTimeout(() => this.setState({ ful: false }), 1000);
  }

  handleReady = () => {
        setTimeout(() => this.setState({ height: 216 }), 200);
    }

  render() {
    return (
      <Container>
      <YouTube
          apiKey='AIzaSyDUvJfXTiUg9cjT4c_LK_9xdP36U6loZLA'
          videoId={this.state.videoid}   // The YouTube video ID
          play={false}             // control playback of video with true/false
              // control whether the video should play in fullscreen or inline
          loop={true}
                  // control whether the video should loop when ended
          style={{ alignSelf: 'auto', height: this.state.height }}
          showinfo={false}
          onReady  = {this.handleReady}
            />
          <Content  bounces={false} style={{backgroundColor:"#00838F"}} >

            <View style={{marginLeft:10,marginTop:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={Styles.playtitle}>
                    {this.state.title}
                </Text>
                <TouchableOpacity onPress={()=>this.shareimage()}>
                  <Image  style={Styles.share}source={require('cric_mania/src/assets/images/share.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{{this.setState({t:!this.state.t}),(this.state.f || this.state.t)?this.deleterec():this.Addtoafv()}}}>
                  <Image  style={Styles.heart}source={(this.state.f ||this.state.t)?img2:img}/>
                </TouchableOpacity>
              </View>

            </View>
            <View style={{marginTop:10}}>
                <Text style={Styles.recommended}>
                    Recommended For You
                </Text>
                <ListView
                        contentContainerStyle={{  marginTop:15}}
                        dataSource={this.state.imglist}
                        renderRow={this.thumb}
                        onEndReached={this.onEndReach}
                    />
            </View>

          </Content>
      </Container>
    );
  }
}
