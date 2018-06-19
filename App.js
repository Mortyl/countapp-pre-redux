import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from './Components/Button';

import { createStore } from "redux";

const source = require('./images/count.jpg');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      history: [],
      chosenDate: new Date() };
    
    this.onClickI = this.onClickI.bind(this)
    this.onClickD = this.onClickD.bind(this)
    this.reset = this.reset.bind(this)
  }

  onClickI() {
      let current = this.state.value;
      let next = current+1;
      if (current < 10){
        let history = this.state.history;
        history.push('Today at ' + this.state.chosenDate + ': Incremented from ' + current + ' to ' + next)
          this.setState({
            value: this.state.value +1,
            history: history,
          })
        }
  }

  onClickD(){
      let current = this.state.value;
      next = current-1;
      if (current > 0){
        let history = this.state.history; 
        history.push('Today at ' + this.state.chosenDate + ': Decremented from ' + current + ' to ' + next)
          this.setState({ 
            value: current -1,
            history: history,
          })
        }
  }

  reset(){
    let history = this.state.history;
    this.setState({
      value: 0,
      history: []
    })
  }


  render() {
    let {value} = this.state
    const isDecrementDisabled = value === 0
    const isIncrementDisabled = value === 10

    const decrementBackgroundColor = isDecrementDisabled ? 'grey' : '#5a2961'
    const incrementBackgroundColor = isIncrementDisabled ? 'grey' : '#5a2961'

    return (
      <View style={styles.container}>
        <Text style={styles.title}>The count</Text>
        <Image style={styles.image} source={source} />
        <View style={styles.buttons}>
          <Button disabled={isIncrementDisabled} backgroundColor={incrementBackgroundColor} text='+' color='white' onClick={this.onClickI}/>
          <Button backgroundColor='white' text={this.state.value} color='purple' onClick={this.reset} />
          <Button disabled={isDecrementDisabled} backgroundColor={decrementBackgroundColor} text='-' color='white' onClick={this.onClickD}/>
        </View>
        <Text style={styles.text}> Tap the number to reset! </Text> 
        <Text style={styles.text}> History </Text>
        <ScrollView>
         {this.state.history.map((timeStamp, i) => (
            <Text key={i}> {timeStamp} </Text>
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,

  },

  image: {
    marginVertical: 20,
  },

  title: {
    fontSize: 30,
    color: '#5a2961',
    fontWeight: 'bold'
  },

  buttons:{ 
    flexDirection: 'row',
  },

  text:{
    fontSize: 20,
    color: '#5a2961',
    marginVertical: 10,
    fontWeight: 'bold'
  }

});

       