import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'Workout Dates',
        headerRight: <View />,
        drawerIcon:(
          // <Image source={require('../assets/icon.png')}
          // style={{height: 24 , width: 24 }} />
          <Ionicons name="md-camera" size={22} color="green" />
        )
    }
      render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f62459',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: '#fff',
    },
    input: {
      width: '90%',
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10
    },
    userbtn: {
      backgroundColor: "#fff68f",
      padding: 15,
      width: "45%"
    },
    btnTxt: {
      fontSize: 18,
      textAlign: "center"
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%"
    },
    inputSignup: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '75%'
    }
  });
  