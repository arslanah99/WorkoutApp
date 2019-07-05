import React from "react";
import { createAppContainer, createDrawerNavigator} from "react-navigation";
import LoginPage from "./src/components/LoginPage";
import SignupPage from "./src/components/SignupPage";
import DashboardPage from "./src/components/Dashboard";
import Graph from "./src/components/graph";
import Progress from "./src/components/progress";
import WorkoutCalender from "./src/components/workoutCalender";


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
  GraphScreen: {
    screen: Graph
  },
  ProgressScreen: {
    screen: Progress
  },
  WorkoutCalenderScreen: {
    screen: WorkoutCalender
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);
