import React from 'react';
import ListItem from './ListItem';

const MyList = (props) => {
  let todoItems = props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });

  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        {todoItems}
      </ul>
    </div>
  )
}

export default MyList;

// import React from 'react';
// import MyList from './MyList';

// function App() {
//   const todos = [
//     "Listen to Hot Mulligan", 
//     "Drink hot cocoa", 
//     "Eat hot cheetos"
//   ];
//   return (
//     <div>
//       <MyList theList={todos}/>
//     </div>
//   );
// }

// export default App;