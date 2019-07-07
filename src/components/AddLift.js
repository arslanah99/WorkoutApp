import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import styled from 'styled-components';


const Container=styled.View`
    width: 418px;
    height: 127px;
    left: 40px;
    top 75px;
    align
`
const Title=styled.Text`
font-size:20px;
text-align:center;
 color:red;
`
const Item=styled.View`
flex:1;
border:1px solid #ccc;
margin:2px 0;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
width:80%;
padding:10px;
 
`


export default class Addlift extends Component {
constructor(props){
  super(props);
  this.state = {
    content: true,
    liftInputContent: ""
  }
}


  buttonClickListener = () => {
    const { liftInputContent } = this.state;
    console.log(liftInputContent);
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content}))
  }

      render() {
        return (
          <View style={{ flex: 1}}>
            {
              this.state.content ?
              <Container>
             <Item >
            <TextInput
             style={{ borderColor: 'gray', borderWidth: 1, }}
              placeholder=" Input Sets, Reps, Exercise Name, and Lbs."
             onChangeText={(liftInputContent) => this.setState({liftInputContent})}
             />
             </Item>
             <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.componentHideAndShow}
            >
         <Text style={{color: 'white'}}> Cancel Lift </Text>
       </TouchableOpacity>
       <TouchableOpacity
              style={styles.addButton}
              onPress={this.buttonClickListener}
            >
                
         <Text style={{color: 'white'}}> Add Lift </Text>
       </TouchableOpacity>
      </Container>
       : null
            }

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
    cancelButton: {
      position: 'absolute',
      left: 30,
      right: 252,
      top: 66,
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
    addButton: {
        position: 'absolute',
        left: 190,
        right: 122,
        top: 66,
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
  