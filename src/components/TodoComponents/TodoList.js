import React from 'react';

import Item from './Todo';
const TodoList = props => {
    return (
        <div className="shopping-list">
            {props.tasks.map(item => (
                <Item key={item.id} item={item} toggle={props.toggle} />
            ))}
            <button className="clear-btn" onClick={() => console.log(props.tasks.filter(e => e.completed === false))}>
                Clear Completed!
      </button>
        </div>

    );
};

export default TodoList;