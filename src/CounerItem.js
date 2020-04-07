import React,  { useState } from 'react';
import {
    ButtonToolbar,
    Button,
    Col,
    Row,
    ButtonGroup,
    ListGroupItem,
    InputGroupAddon,
    Input,
    InputGroup,
    InputGroupText
} from 'reactstrap';

export default function CounterItem(props) {

    const {name, value, id} = {...props.list};
    const [counterName, setCounterName] = useState( name );
    const [inputName, setInputName] = useState(true);
    const [inputFocus, setInputFocus] = useState(true)

    const changeCounterName = () => {
        setInputName(!inputName);
        setInputFocus(!inputFocus);
    };

    return (
        <ListGroupItem>
            <Row>
                <Col xs='5'>
            <InputGroup>
                    <Input disabled={inputName}
                           focus={inputFocus.toString()}
                           value={name}/>
                    <InputGroupAddon addonType="append">
                        {/*<InputGroupText>*/}
                            {/*@example.com*/}
                        <ButtonGroup>
                            <Button onClick={() => props.counterChange(id, -1)}>-</Button>
                            <Button disabled={true}>
                                <InputGroupAddon outline color="secondary" addonType="">
                                    {value}
                                </InputGroupAddon>
                            </Button>
                            <Button onClick={() => props.counterChange(id, 1)}>+</Button>
                        </ButtonGroup>
                        {/*</InputGroupText>*/}
                    </InputGroupAddon>
            </InputGroup>
                </Col>
                <Col xs='6'>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button color="danger" onClick={() => props.removeItem(id)}>Delete</Button>
                            <Button color="warning" onClick={() => props.resetItem(id)}>Reset</Button>
                            <Button color="warning" onClick={changeCounterName}>Rename</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
        </ListGroupItem>
    );
};