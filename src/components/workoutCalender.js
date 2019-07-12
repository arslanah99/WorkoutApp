import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';

export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'Calendar',
        headerRight: <View />,
        drawerIcon:(
          // <Image source={require('../assets/icon.png')}
          // style={{height: 24 , width: 24 }} />
          <Ionicons name="md-camera" size={22} color="green" />
        )
    }
    
    createCalendarBloops = () => {
      for(let i = 1; i <= 31; i ++){
        if(i % 2 === 0){
          console.log((i).toString())
        }
      }
    }

      render() {
        return (
          <View>
          <Header
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'Calendar', style: { color: '#FF473A'} }}
          rightComponent={{ text: 'IMPERIUM', color: '#FF0000' }}
          containerStyle={{
            backgroundColor: '#ffffff'
          }}
          />
            <CalendarList
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              // Mark specific dates
              markingType={'custom'}
              markedDates={{
                '2019-07-12': {
                  customStyles: {
                    container: {
                      backgroundColor: 'green'
                    },
                    text: {
                      color: 'black',
                      fontWeight: 'bold'
                    }
                  }
                }
              }}
              />
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
  