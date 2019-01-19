import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Open extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.resetTo({
                screen: 'san.Home',
                navigatorStyle: {
                    navBarHidden: true
                }
            });
        }, 2000);
    }
    render() {
        return <View style={{ flex: 1, backgroundColor: '#23456B', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 50, textAlign: 'center' }}>
                Build Your Knowledge
            </Text>
            <View>
                <Text style={{color: 'white', fontSize: 30}}>
                    with Question bank
                </Text>
            </View>
        </View>
    }
} 
