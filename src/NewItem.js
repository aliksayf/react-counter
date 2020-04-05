import React, {useState} from 'react';
import {InputGroup, InputGroupAddon, Input, Button, ListGroupItem, Col, Row} from 'reactstrap';

export default function NewItem(props) {

    const [itemName, setItemName] = useState('');
    const [itemValue, setItemValue] = useState(0);
    const [validator, setValidator] = useState(0)

    const inputNameHandler = (name) => {
        setItemName(name);
        setValidator(0);
    };

    const inputValueHandler = (value) => {
        setItemValue(+value);
    };

    const submitButtonHandler = () => {
        if (itemName !== '') {
            props.addItem(itemName, itemValue);
            setValidator(0);
            setItemName('');
            setItemValue(0);
        } else {
            setValidator(1);
        }
    };


    return (
        <ListGroupItem color="secondary">

            <Row>
                <InputGroup>
                    <Col xs='3'>
                        <InputGroupAddon addonType="">
                            New counter
                        </InputGroupAddon>
                    </Col>
                    <InputGroupAddon addonType="append">
                        <Input onChange={(e) => inputNameHandler(e.target.value)}
                               placeholder="Counter name"
                               value={itemName}
                               invalid={validator}/>
                        <Input onChange={(e) => inputValueHandler(e.target.value)}
                               placeholder="Counter value"
                               value={itemValue}/>
                        <Button addonType="prepend" color="secondary"
                                onClick={submitButtonHandler}>Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Row>
        </ListGroupItem>
    );
};