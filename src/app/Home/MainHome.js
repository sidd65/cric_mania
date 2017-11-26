/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,TouchableOpacity,ScrollView,Image,
  Text,ListView,
  View
} from 'react-native';
import { Container, Header, Left, Right, Body, Button, Title,
         Icon, Content,Tabs,Tab } from 'native-base';
import Styles from './styles.css';
import Home from './home'
import Fav from './favourites'
export  class MainHome extends Component {

      render() {
        return (
            <Container>
                <Header  style={{backgroundColor:'#006064'}}>
                    <Left>
                    </Left>
                    <Body style={{alignItems:'center',marginLeft:55}}>
                        <Title style={Styles.title}>
                            HOME
                        </Title>
                    </Body>
                    <Right/>
                </Header>
                <Tabs  >
                     <Tab  heading="CATEGORIES" tabStyle={{backgroundColor: '#006064'}} activeTabStyle={{backgroundColor: '#006064'}}>
                            <Home/>
                      </Tab>
                      <Tab heading="FAVOURITES" tabStyle={{backgroundColor: '#006064'}} activeTabStyle={{backgroundColor: '#006064'}}>
                          <Fav/>
                      </Tab>
                </Tabs>

            </Container>
        );
  }
}
