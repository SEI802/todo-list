import React from 'react';
import ListItem from './ListItem';
import './index.css';

const MyList = (props) => {
  let todoItems = props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });

  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <div className="items">
        <ul>
          {todoItems}
        </ul>
      </div>
    </div>
  )
}

export default MyList;