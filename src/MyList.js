import React, { useState } from 'react'
import ListItem from './ListItem'
import './App.css'

const MyList = (props) => {
	const [state, setState] = useState({
		toDoItemArray: props.theList,
		newItem: ''
	})

	let todoItems = state.toDoItemArray.map((item, index) => {
		return <ListItem task={item} key={index} />
	})

	const clearList = () => {
		setState({
			toDoItemArray: []
		})
	}

	return (
		<div>
			<h1>Things I should stop procrastinating</h1>
			<ul>{todoItems} </ul>

			{/*{ <form onSubmit={addItemForm}>
				<label htmlFor='body'>Add new todo items:</label>
				<input
					type='text'
					name='body'
					onChange={(e) => setState({ newItem: e.target.value })}
				/>
				<button type='submit'>Add to the list!</button>
			</form> */}

			<button onClick={clearList}>Finished the List!</button>
		</div>
	)
}
export default MyList
