import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
export default class Help extends Component {
    render() {
        return <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ color: 'black', fontSize: 30 }}>
                    Instruction To Play!
                 </Text>
            </View>
            <Text style={{ Color: 'white', fontSize: 20, color: 'black' }}>
                {'1. This is a KBC Game.\n'}
                {'2. There are  15 different levels'}
            </Text>

        </View>
    }
}
