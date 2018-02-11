/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,ScrollView,Image,
  Text,ListView,AsyncStorage,RefreshControl,
  View
} from 'react-native';
import { Container, Header, Left, Right, Body, Button, Title,
         Icon, Content,Tabs,Tab,Card } from 'native-base';
import Styles from './styles.css';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let fav2=[];
let fav1=[];
export default class fav extends Component {
        constructor(props) {
            super(props)
            this.state = {
            dataSource: ds.cloneWithRows([]),
            refreshing:true
            };
        }


        componentDidMount = ()=> {
          console.log("aaaa");
         this.getdata()
        }
        shouldComponentUpdate=async()=>{
          let myArray = await AsyncStorage.getItem('favt');
                 if (myArray !== null) {
          // We have data!!
         fav1=JSON.parse(myArray)
        }
        console.log(fav1);
          this.setState({dataSource:ds.cloneWithRows(fav1),refreshing: true})
          if(fav1.length!==fav2.length) return true;
        }
        getdata=async()=>{
          let myArray = await AsyncStorage.getItem('favt');
                 if (myArray !== null) {
          // We have data!!
          fav2=JSON.parse(myArray)
        }
        this.setState({dataSource:ds.cloneWithRows(fav2),refreshing: true})
        console.log("asas");
        this.setState({refreshing:false})
        }

        Nofav = () => {
        if(this.state.dataSource.getRowCount() == 0)
        {
          return(
            <View style={Styles.nofav}>
            <Text style={Styles.nofavtext} >No Video added  yet!</Text>
            </View>
          )
        }
    }
    thumb=(t,index)=>{
    //  let uri=(t.snippet.thumbnails)?t.snippet.thumbnails.high.url:'https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg';
        return(
            <View key={index}>
                <Card style={{flexDirection:'column',backgroundColor:"#283593"}}>
                    <TouchableOpacity onPress={()=>{_navigator.navigate('playvideo',{videoid:t.u,title:t.title,getdata:this.getdata})}} >
                        <Image key={index} style={Styles.thumbimg} source={{uri:t.thumbnails}}>
                        <Image  style={Styles.play}source={require('cric_mania/src/assets/images/icon.png')}/>
                        </Image>
                    </TouchableOpacity>
                    <View >
                    <Text style={Styles.gkheadings}>
                      {t.title}
                    </Text>
                    </View>
                </Card>
            </View>
        )
    }

      render() {
        return (
            <Container>
                    {this.Nofav()}
                <ListView
                        contentContainerStyle={Styles.walldetailsscroll}
                        dataSource={this.state.dataSource}
                        renderRow={this.thumb}
                    >
                    </ListView>

            </Container>
        );
  }
}
