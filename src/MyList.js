import React from "react";
import ListItem from "./ListItem";

const MyList = (props) => {
  let todoItems = props.theList.map((item, index) => {
    return <ListItem task={item} key={index} />;
  });

  return (
    <div className="list">
      <h1>Things I should stop procrastinating:</h1>
      <ul>{todoItems}</ul>
    </div>
  );
};

export default MyList;
