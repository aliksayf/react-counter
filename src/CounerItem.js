import React, { useState } from 'react';

export default function CounterItem(props) {

    const {name, value, id} = { ...props.list };

    return (
        <div>
            {name}
            <button onClick={()=>props.counterChange(id, -1)}>-</button>
            {value}
            <button onClick={()=>props.counterChange(id, 1)}>+</button>
            <button onClick={()=>props.removeItem(id)}>X</button>
            <button onClick={()=>props.resetItem(id)}>O</button>
        </div>
    );
};