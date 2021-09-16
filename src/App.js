import React from 'react';
import MyList from './MyList';

function App() {
  const todos = [
    "MAKE COFFEE", 
    "DRINK COFFEE", 
    "EAT SOMETHING"
  ];
  return (
    <div className="app">
      <MyList theList={todos} />
    </div>
  );
}

export default App;