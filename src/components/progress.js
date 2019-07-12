import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';



export default class Dashboard extends Component {
    constructor(props){
      super(props)
      this.state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };
    }

    async componentDidMount(){
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted'
      })
    }

    static navigationOptions = {
        title: 'Progress Photos',
        headerRight: <View />,
        drawerIcon:(
          // <Image source={require('../assets/icon.png')}
          // style={{height: 24 , width: 24 }} />
          <Ionicons name="md-trending-up" size={22} color="green" />
        )
    }
      render() {
        //button to render and create camera
        const { hasCameraPermission } = this.state;
        if(hasCameraPermission === null){
          return (
            <View style={{ flex: 1, alignItems: 'center'}}>
              <Header
            leftComponent={{ icon: 'menu', color: 'black' }}
            centerComponent={{ text: 'Progress Photos', style: { color: '#FF473A'} }}
            rightComponent={{ text: 'IMPERIUM', color: '#FF0000' }}
            containerStyle={{
              backgroundColor: '#ffffff'
            }}
            />
              <View>
                <Text>Progress Photo Screen</Text>
              </View>
            </View>
          );
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 0.2,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}                
                  onPress={
                    hasCameraPermission === null
                  }
                >
                  <Text>Go back</Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
          )
        }


       
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
  