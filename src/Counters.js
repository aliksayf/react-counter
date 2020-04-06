import React, {useState} from 'react';
import CounterItem from "./CounerItem";
import NewItem from "./NewItem";
import ModalExample from './ModalWindow';
import {Alert, Button, ListGroup, } from 'reactstrap';

const items = [
    {name: 'First', value: 12, id: 1},
    {name: 'Second', value: 13, id: 2}
];

export default function Counters() {


    const [counterList, setCounterList] = useState(items);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


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
        array.map(el => el.id === id ? el.value = 0 : '');
        setCounterList(array);
    };

    const addItem = (nameItem, valueItem) => {
        let array = [...counterList];
        array.push({name: nameItem, value: +valueItem, id: Math.random()});
        setCounterList(array);
    };

    const resetTotal = () => {
        let array = [...counterList]
        array.map(el => el.value = 0);
        setCounterList(array);
    };

    return (
        <div>
            <Alert color="dark"
                   className="d-flex align-items-center justify-content-center ">
                <h3>
                    Total:
                    {counterList.length !== 0 ? counterList.map(el => el.value).reduce((a, b) => a + b) : 0}
                    <Button size="md" color="warning" onClick={resetTotal}>Reset All</Button>
                </h3>
            </Alert>
            <ListGroup>

                {counterList.map(el => <CounterItem
                    key={el.id}
                    list={el}
                    counterChange={counterChange}
                    removeItem={removeItem}
                    resetItem={resetItem}
                />)}

            </ListGroup>
            <NewItem addItem={addItem}/>
            <ModalExample modal={modal}
                          toggle={toggle}/>
        </div>
    );
};