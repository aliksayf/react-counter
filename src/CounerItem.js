import React from 'react';
import {
    ButtonToolbar,
    Button,
    Col,
    Row,
    ButtonGroup,
    ListGroupItem,
    Alert,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';

export default function CounterItem(props) {

    const {name, value, id} = {...props.list};

    return (
        <ListGroupItem>
            {/*<InputGroup>*/}

            <ButtonToolbar>

                <Col xs='5'>
                    <InputGroupAddon>
                        {name}
                    </InputGroupAddon>
                </Col>
                <ButtonGroup>
                    <Button onClick={() => props.counterChange(id, -1)}>-</Button>
                    <Button disabled={true} >
                        <Col xs='3' outline color="secondary">
                            {value}
                        </Col>
                    </Button>
                    <Button onClick={() => props.counterChange(id, 1)}>+</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="danger" onClick={() => props.removeItem(id)}>Delete</Button>
                    <Button color="warning" onClick={() => props.resetItem(id)}>Reset</Button>
                </ButtonGroup>
            </ButtonToolbar>
            {/*</InputGroup>*/}
        </ListGroupItem>
    );
};