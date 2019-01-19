import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class TimesUp extends Component {
    render() {
        return <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
            
            <Text style={{fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>Time's Up. Choose an option below</Text>
            
            <Button
                title='Main Menu'
                onPress={() => {
                    this.props.navigator.resetTo({
                        screen: 'san.Home',
                        navigatorStyle: {
                            navBarHidden: true
                        }
                    });
                }}
            />
            <Button
                title='Play Again'
                onPress={() => {
                    this.props.navigator.pop();
                    this.props.navigator.push({
                        screen: 'san.Login'
                    });
                }}
            />
        </View>
    }
}