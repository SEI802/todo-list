import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super();

    this.state = {
      toDoItems: props.theList,
     };
  }

  deleteList = (e) => {
    this.setState({
      toDoItems: []
    });
  }

  putItem = (e) => {
    e.preventDefault();

    const { toDoItems, newItem } = this.state;

    this.setState({
      toDoItems: [...toDoItems, newItem],
      newItem: ""
    });
  }

  itemChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  }

  render() {
    const allTasks = this.state.toDoItems.map((task, index) => {
      return <ListItem task={task} key={index} />;
    });

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {allTasks}
        </ul>
        <br />
        
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={this.itemChange}
            value={this.state.newItem}
            />
          <button onClick={this.putItem}>Add it!</button>
        </form>

        <button 
          onClick={this.deleteList}>
            Finished the list!
        </button>
      </div>
    );
  }
}

export default MyList;
