import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default class Dashboard extends Component {
  static navigationOptions = {
    title: "Login Page",
    header: null,
    drawerIcon:(
      // <Image source={require('../assets/icon.png')}
      // style={{height: 24 , width: 24 }} />
      <Ionicons name="md-log-in" size={22} color="green" />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f62459" barStyle="light-content" />
        <Text style={styles.welcome}>Login to IMPERIUM</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userbtn}
            onPress={() => this.props.navigation.navigate("Details")}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userbtn}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f62459",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  input: {
    width: "90%",
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
    borderColor: "black",
    borderWidth: 1,
    width: "75%"
  }
});
