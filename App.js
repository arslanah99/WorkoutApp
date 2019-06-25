import React from "react";
import { createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import LoginPage from "./src/components/LoginPage";
import SignupPage from "./src/components/SignupPage";
import DashboardPage from "./src/components/Dashboard";


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

// const CustomDrawerContentComponent = props => (
//   <SafeAreaView style={{ flex: 1 }}>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// )

const MyDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: LoginPage
  },
  Signup: {
    screen: SignupPage
  },
  Details: {
    screen: DashboardPage
  }, 

});

const MyApp = createAppContainer(MyDrawerNavigator);
