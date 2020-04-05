import React, { useState } from 'react';
import {  Button  } from 'reactstrap';

export default function NewItem(props) {

    const [itemName, setItemName] = useState('');
    const [itemValue, setItemValue] = useState(0);

    const inputNameHandler = (name) => {
        setItemName(name);
    };

    const inputValueHandler = (value) => {
        setItemValue(+value);
    };

    return (
        <div>

            Add new counter
            <input onChange={(e)=>inputNameHandler(e.target.value)}/>
            <input onChange={(e)=>inputValueHandler(e.target.value)}/>
            <button onClick={()=>props.addItem(itemName, itemValue)}>Add</button>

        </div>
    );
};