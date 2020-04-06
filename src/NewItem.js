import React, {useState} from 'react';
import {InputGroup, InputGroupAddon, Input, Button, ListGroupItem, Col, Row} from 'reactstrap';

export default function NewItem(props) {

    const [itemName, setItemName] = useState('');
    const [itemValue, setItemValue] = useState(null);
    const [nameValidator, setNameValidator] = useState(0)

    const inputNameHandler = (name) => {
        setItemName(name);
        setNameValidator(0);
    };

    const inputValueHandler = (value) => {
        setItemValue(value);
    };

    const submitButtonHandler = () => {
        if (itemName !== '') {
            props.addItem(itemName, itemValue);
            setNameValidator(0);
            setItemName('');
            setItemValue(null);
        } else {
            setNameValidator(1);
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
                               invalid={nameValidator}/>
                        <Input onChange={(e) => inputValueHandler(e.target.value)}
                               placeholder="Counter value"
                               type='number'
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