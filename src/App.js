import './App.css'
import MyList from './MyList'

const App = (props) => {
	const todos = [
		'Listen to Britney Spears',
		'Drink more coffee',
		'Inhaled HOT CHEETOS',
		'something new',
		'This other thing'
	]

	return (
		<div>
			<MyList theList={todos} />
		</div>
	)
}

export default App
