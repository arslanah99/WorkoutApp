import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import AddLiftToggle  from './AddLift'


export default class Dashboard extends Component {
constructor(props){
  super(props);
  this.state = {
    date: '',
    content: true,
    inputingWorkout: '',
    workoutArray: []
  }
}


  componentDidMount(){
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      date:
        date + '/' + month + '/' + year
    })
  }

  inputWorkout = (workout) => {
    let workoutArray = this.state.workoutArray
    workoutArray.push(workout);
    this.setState({
      workoutArray: workoutArray
    })
    // console.log(workout)
  }



  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content}))
  }

  static navigationOptions = {
        title: 'Todays Workout',
        headerRight: <View />,
        drawerIcon:(
          // <Image source={require('../assets/icon.png')}
          // style={{height: 24 , width: 24 }} />
          <Ionicons name="md-clipboard" size={22} color="green" />
        )
    }
      render() {
        let workoutFullArray = this.state.workoutArray;
        const loopOverArray = workoutFullArray.map((array, index) => 
          <Text key={index}>{array}</Text>
        )
        return (
          <View style={{ flex: 1, alignItems: 'center'}}>
          <Header
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'Todays Workout', style: { color: '#FF473A'} }}
          rightComponent={{ text: 'IMPERIUM', color: '#FF0000' }}
          containerStyle={{
            backgroundColor: '#ffffff'
          }}
          />
            <View>
              <Text>Dashboard Screen</Text>
            </View>
            <View>
              <Text style={styles.date}>
                {this.state.date}
              </Text>
            </View>
            <View>
              {loopOverArray}
            </View>
            {
              this.state.content ? <View><AddLiftToggle inputWorkout={this.inputWorkout}/></View>  : null
            }
            <TouchableOpacity
              style={styles.addButton}
              onPress={this.componentHideAndShow}
            >
         <Text style={{color: 'white'}}> Add Lift </Text>
       </TouchableOpacity>
       <TouchableOpacity
              style={styles.completeButton}
              onPress={this.onPress}
            >
         <Text style={{color: 'white'}}> Complete Workout </Text>
       </TouchableOpacity>
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
    date: {
      position: 'absolute',
      width: 217,
      height: 31,
      right: -50,
      top: 580,
      fontSize: 26,
      lineHeight: 32
    },
    addButton: {
      position: 'absolute',
      left: 230,
      right: 12,
      top: 576,
      backgroundColor: '#FF473A',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 6,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      alignItems: 'center',
    },
    completeButton: {
      position: 'absolute',
      left: 10,
      top: 576,
      backgroundColor: '#FF473A',
      borderColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 6,
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      alignItems: 'center',
    }
  });
  