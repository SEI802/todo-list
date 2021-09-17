import React, { useState } from "react";
import ListItem from "./ListItem";

const MyList = (props) => {
  const [state, setState] = useState({
    toDoItemArray: props.theList,
    newItem: "",
  });

  const toDoItems = state.toDoItemArray.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });

  const clearList = () => {
    console.log("Clearing the list!");
    setState({
      toDoItemArray: [],
    });
  };

  const newItemChange = (e) => {
    const stateCopy = { ...state };
    stateCopy.newItem = e.target.value;

    setState(stateCopy);
  };

  const addItem = (e) => {
    e.preventDefault();
    const stateCopy = { ...state };
    stateCopy.toDoItemArray.push(state.newItem);
    stateCopy.toDoItemArray.newItem = "";

    setState(stateCopy);
  };

  return (
    <div>
      <h1>Things I should stop procrastinating</h1>
      <ul>{toDoItems}</ul>
      <button onClick={clearList}>Finished the list!</button>

      <form>
        <input
          type="text"
          placeholder="Type an item here"
          onChange={(e) => newItemChange(e)}
          value={state.newItem}
        />
        <button onClick={(e) => addItem(e)}>Add it!</button>
      </form>
    </div>
  );
};

export default MyList;
