import React from 'react';

const Item = props => {
    console.log(props);
    return (

        < div
            onClick={() => props.toggle(props.item.id)}
            className={`item${props.item.completed ? ' completed' : ''}`}
        >
            <p>{props.item.name}</p>
        </div >
    );
};

export default Item;