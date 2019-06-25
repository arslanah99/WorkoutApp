import React from "react";
import { createAppContainer, createDrawerNavigator} from "react-navigation";
import LoginPage from "./src/components/LoginPage";
import SignupPage from "./src/components/SignupPage";
import DashboardPage from "./src/components/Dashboard";


export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

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
