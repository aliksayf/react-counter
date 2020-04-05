import React, {useState} from 'react';
import CounterItem from "./CounerItem";
import NewItem from "./NewItem";

const items = [
    {name: 'First', value: 12, id: 1},
    {name: 'Second', value: 13, id: 2}
];

export default function Counters() {


    const [counterList, setCounterList] = useState(items);

    const counterChange = (id, difference) => {
        let array = [...counterList];
        array.map(el => el.id === id ? el.value += difference : '');
        setCounterList(array);
    };

    const removeItem = (id) => {
        let array = counterList.filter(el => el.id !== id);
        setCounterList(array);
    };

    const resetItem = (id) => {
        let array = [...counterList];
        array.map(el=> el.id === id ? el.value = 0 : '');
        setCounterList(array);
    };

    const addItem = (nameItem, valueItem) => {
        let array = [...counterList];
        array.push({name: nameItem, value: valueItem, id: Math.random()});
        setCounterList(array);
        console.log('add')
    };

    const resetTotal = () => {
        let array = [...counterList]
        array.map(el => el.value = 0);
        setCounterList(array);
    };

    return (
        <div>
            Total: {counterList.map(el => el.value).reduce((a, b) => a + b)}
            <button onClick={resetTotal}>Reset All</button>

            {counterList.map(el => <CounterItem
                key={el.id}
                list={el}
                counterChange={counterChange}
                removeItem={removeItem}
                resetItem={resetItem}
                />)}

            <NewItem addItem={addItem}/>
        </div>
    );
};