/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {text:"Some"}
  }

  onTxChange = (te) => this.setState({text:te});

  render() {
    /*
    return (
      <View style={styles.container}>
     
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.state.text}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput value={this.state.text} onChangeText={this.onTxChange}></TextInput>
        
      </View>
    );
    */
   return (
     <View style={styles.containerm}>

     
    <View style={styles.container}>
    
    <View style={styles.cBox}>
    <Button title="1"  color="#dedede"></Button>
    </View>
    <View style={styles.cBox}>
    <Button title="1" color="#dedede"></Button>
    </View>
    <View style={styles.cBox}>
    <Button title="1"  color="#dedede"></Button>
    </View>  
    
    </View>

<View style={styles.container}>
    
<View style={styles.cBox}>
<Button title="1"  color="#dedede"></Button>
</View>
<View style={styles.cBox}>
<Button title="1" color="#dedede"></Button>
</View>
<View style={styles.cBox}>
<Button title="1"  color="#dedede"></Button>
</View>  

</View>
</View>
    
   )
  }
}

const styles = StyleSheet.create({
  containerm: {
    flex: 1,

    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    
  },
  container: {
    flex: 1,

    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    
  },
  cBox: {
    flex: 1,
    
    flexDirection: 'column',
    
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
