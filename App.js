import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Dashboard from './src/components/Dashboard'


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
          <TouchableOpacity style={styles.userbtn} onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userbtn} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'IMPERIUM',
    headerRight: <View />
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'IMPERIUM',
    headerRight: <View />
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Signup Screen</Text>
        <Text style={styles.welcome}>Login to IMPERIUM</Text>
        <TextInput 
          style={styles.inputSignup}
          placeholder="Username"
        />
        <TextInput 
          style={styles.inputSignup}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userbtn} onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userbtn} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:Dashboard
  }
  // Home: HomeScreen,
  // Details: DetailsScreen,
  // Signup: SignupScreen
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f62459"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
    }
  },

)

const MyApp = createAppContainer(MyDrawerNavigator);
const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends React.Component{
  render(){
    return(
      <AppContainer />,
      <MyApp />
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
