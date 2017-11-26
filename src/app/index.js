import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {  View } from 'react-native';
import Routes from './routes';

const Navigator = StackNavigator(Routes,{
    initialRouteName: 'MainHome',
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
        _navigator = navigation;
    },
});
export default class App extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    _getProps=()=>{
    return {
        state: this.state,
    }
    }



    render(){
        return(
                    <View style={{flex:1,backgroundColor: '#BDBDBD'}}>
                    <Navigator
                    screenProps={this._getProps()}
                    onNavigationStateChange={(prevState, currentState) => {
                                _routeStack = currentState.routes;
                }}/>
                    </View>

        )
    }

}
