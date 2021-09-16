import React from 'react';
import MyList from './MyList';

function App() {
  const todos = [
    "Listen to Hot Mulligan", 
    "Drink hot cocoa", 
    "Eat hot cheetos"
  ];
  return (
    <div className="App">
      <MyList theList = {todos} />
    </div>
  );
}

export default App;