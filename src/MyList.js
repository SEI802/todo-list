import React from 'react';
import ListItem from './ListItem';

const MyList = props => {
    const toDoItems = props.theList.map((item, index) => {
        return <ListItem task={item} key={index} />;
      })
    return (
        <div>
            <h1>Things I should stop procrastinating:</h1>
            <ul>
                {toDoItems}
            </ul>

        </div>
    )


}

export default MyList;