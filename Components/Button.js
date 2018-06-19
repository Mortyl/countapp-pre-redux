import React, {Component} from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const Button = ({backgroundColor, color, text, onClick, disabled}) => {

		const btnBack = {backgroundColor}
		const btnText = {color}
	

			return(
			<TouchableHighlight disabled={disabled} onPress={onClick} style={[styles.button, btnBack]}>
				<Text style={[styles.label, btnText]}> {text} </Text>
			</TouchableHighlight>
		)
};
	

const styles = StyleSheet.create({
	button: { 
	    height: 50,
	    width: 50, 
	    margin: 5,
	    alignItems: 'center',
	    justifyContent: 'center',
    	borderRadius: 5,
    	margin: 8,
  	},

  	label: { 
		fontSize: 24,
		fontWeight: 'bold',
	}, 
});
  

export default Button
