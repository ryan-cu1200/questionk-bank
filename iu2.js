import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class Greeting extends Component {
  render() {
    return <Text>Hello {this.props.name}</Text>;
  }
}

class BigText extends Component {
  render() {
    return <Text style={{ fontSize: 22, color: 'black' }}>{this.props.content}</Text>
  }
}

export default class demo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("./a.png")} 
          style={{resizeMode: "contain", width: 200, height: 200}} 
        /> 

        <Text
          style={styles.myText}
        >
          This is an Image. {'\n'} Why is this wow
        </Text>

        <Image 
          source={require("./a.png")} 
          style={{resizeMode: "contain", width: 200, height: 200}} 
        />         

        <Text style={styles.myText}>
          Another Text
        </Text>

        <BigText content="This is a demo" />

        <BigText content="Another big text demo" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  myText: {
    fontSize: 20,
    color: 'black'
  }
});

AppRegistry.registerComponent('demo', () => demo);
