import React from 'react'

const ListItem = (props) => {
	return <li>{props.task}</li>
}

/*
example to make a new Array
const phrases = ['ice cream', 'dinosaurs', 'hobbits'];

let excitedPhrases = phrases.map((phrase, index) => {
  return <Component key={index} phrase={phrase}>
}); // excitedPhrases is ["ice cream!", "dinosaurs!", "hobbits!"]

*/
export default ListItem
