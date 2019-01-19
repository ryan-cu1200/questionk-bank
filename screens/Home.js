import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    Image,
    ToastAndroi,
    BackAndroid
} from 'react-native';


export default class Home extends Component {
    render() {
        return <View style={{ flex: 1, backgroundColor: '#100630', justifyContent: 'space-around', alignItems: 'center' }}>

            <Image style={{ flex: 2 }} resizeMode={'contain'} source={require('../c.png')} />
            <View style={{ width: 200, justifyContent: 'space-around', flex: 1 }}>
                <Button title= 'Play'
                   color='#3515A3' 
                    onPress={() => {
                        this.props.navigator.push({
                            screen: 'san.Login',
                            animated: true,
                            animationType: 'slide-horizontal',
                            navigatorStyle: {
                                navBarHidden: true
                            }
                        });
                    }}
                />
                <Button title= 'Quit'
                    color='#3515A3'
                    onPress={() => {
                        BackAndroid.exitApp();
                    }}
                />
                <Button title= 'Help ?'
                    color='#3515A3'
                    onPress={() => {
                        this.props.navigator.push({
                            screen: 'san.Help',
                            navigatorStyle: {
                                navBarHidden: true
                            }
                        })
                    }}
                />
            </View>
        </View>
    }
}