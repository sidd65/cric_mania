import React, { Component } from 'react';
import { AppRegistry, View,AsyncStorage } from 'react-native';
import App from './app';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'
_routeStack=[];
_navigator = null;
_defaultState={};
_fav=[];

export default class cric_mania extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount = async()=> {
          AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
          AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
          AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917 ');
          let myArray = await AsyncStorage.getItem('favt');
                 if (myArray !== null) {
          fav=JSON.parse(myArray)
      }
        }
        render() {
            return (
                <App />
            );
        }
    }
     AppRegistry.registerComponent('cric_mania', () => cric_mania);
