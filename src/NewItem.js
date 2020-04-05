import React, {useState} from 'react';
import {InputGroup, InputGroupAddon, Input, Button, ListGroupItem, Col, Row} from 'reactstrap';

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
        <ListGroupItem color="secondary">

            <Row>
                <InputGroup>
                    <Col xs='2'>
                        <InputGroupAddon addonType="prepend">
                            New counter
                        </InputGroupAddon>
                    </Col>
                        <InputGroupAddon addonType="append">
                            <Input onChange={(e) => inputNameHandler(e.target.value)}
                                   placeholder="Counter name"/>
                            <Input onChange={(e) => inputValueHandler(e.target.value)}
                                   placeholder="Counter value"/>
                            <Button addonType="prepend" color="secondary"
                                    onClick={() => props.addItem(itemName, itemValue)}>Add
                            </Button>
                        </InputGroupAddon>
                </InputGroup>
            </Row>
        </ListGroupItem>
    );
};