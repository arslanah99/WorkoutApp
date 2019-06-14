import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
      header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f62459" barStyle="light-content"/>
        <Text style={styles.welcome}>Login to IMPERIUM</Text>
        <TextInput 
          style={styles.input}
          placeholder="Username"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userbtn} onPress={() => alert("Login works")}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userbtn} onPress={() => alert("password works")}>
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends React.Component<Props>{
  render(){
    return(
      <AppContainer />
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
  }
});
