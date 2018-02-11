/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,Image,
  Text,
  View
} from 'react-native';
import YouTube from 'react-native-youtube'
import Styles from './styles.css'
var id='PLtineFwLo0jc_RT2VEtwSYP48796yAUep'
import { Container, Header, Title, Button, Left, Right, Body, Icon,Card,Content } from 'native-base';
var   part= 'snippet,contentDetails,statistics'
let img=[
    {
        title:'Greatest Knocks',
        id:'PL_fkSZyETSkwf5gpJgL3c9wfTfm3kzR2O',
        img:require('cric_mania/src/assets/images/bat.jpg')

    },
    {
        title:'Wrost Sledging',
        id:'PL_fkSZyETSkygsHhWsXfRU_qrFM7S2vum',
        img:require('cric_mania/src/assets/images/sledging.jpg')
    },
    {
        title:'Best Fielding Efforts',
        id:'PL_fkSZyETSkxRs-hM06ZTrLeSXv6fqbEh',
        img:require('cric_mania/src/assets/images/field.jpg')
    },
    {
        title:' Best Bowling Efforts',
        id:'PL_fkSZyETSky7CtbOwi4gmzRrsvCWM5f7',
        img:require('cric_mania/src/assets/images/bowl.jpg')

    },
    {
        title:' Best of IPL',
        id:'PL_fkSZyETSkxxlOxVOOYlGSB5hb_MA5RU',
        img:require('cric_mania/src/assets/images/ipll.jpg')

    },

]
export default class HOME extends Component {

  componentDidMount = ()=> {


  }
  List = () => {
      return img.map(function (cricket, index) {
          return this.wallpapers(cricket, index);
      }.bind(this));
  }
  wallpapers=(cricket,index)=>{
      return(
          <View key={index}>
              <Card style={{flexDirection:'column'}}>
                  <TouchableOpacity style={Styles.thumview} onPress={()=>{_navigator.navigate('GREATKNOCKS',{cricket:cricket})}} >
                    <Image key={index} style={Styles.thumbimg}source={cricket.img}>
                        <Text style={Styles.headings}>

                        </Text>
                    </Image>
                  </TouchableOpacity>
              </Card>
          </View>
      )
  }
  render() {
    return (
      <Container>
          <Content  bounces={false} style={{backgroundColor:"#BDBDBD"}} >
              {this.List()}
          </Content>
      </Container>
    );
  }
}
