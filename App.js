import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginPage from './src/components/LoginPage';
import SignupPage from './src/components/SignupPage';
import DashboardPage from './src/components/Dashboard';

// class DetailsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'IMPERIUM',
//     headerRight: <View />
// }
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const MyDrawerNavigator = createDrawerNavigator({
  Login:{
    screen:LoginPage
  }, 
  Signup: {
    screen:SignupPage
  },
  Details: {
    screen:DashboardPage
  }
})

const RootStack = createStackNavigator(
  {
    Home: LoginPage,
    Details: DashboardPage,
    Signup: SignupPage
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
