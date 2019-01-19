import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class demo extends Component {
  constructor(props)
  {
    super(props);

    this.state={
      count: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style= {{color: 'red', fontSize: 50}}>
          Welcome
        </Text>
        <Image source={require('./b.png')} style={{width: 150, height: 150, borderRadius: 75}} />
        <Text style= { styles.mytext}>
          I counted till: {this.state.count}
        </Text>
        <TouchableOpacity onPress={() => {
          this.setState({
            count: this.state.count + 5
         })
        }} style={{height: 60, width: 300, backgroundColor: 'green', alignItems: 'center',justifyContent: 'center', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Count me
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around'
   },
   mytext: {
    color: 'blue',
    fontSize: 30
   }
});

AppRegistry.registerComponent('demo', () => demo);
