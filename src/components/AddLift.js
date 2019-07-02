import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import styled from 'styled-components';


const Container=styled.View`
    width: 318px;
    height: 127px;
    left: 25px;
    top 75px;
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
    content: true
  }
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
             <Title >Item number 1</Title>
             </Item>

      </Container> : null
            }
            </View>
           
        );
      }
}
const styles = StyleSheet.create({

  });
  