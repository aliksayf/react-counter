import React from 'react';
import {
    ButtonToolbar,
    Button,
    Col,
    Row,
    ButtonGroup,
    ListGroupItem,
    InputGroupAddon,
} from 'reactstrap';

export default function CounterItem(props) {

    const {name, value, id} = {...props.list};

    return (
        <ListGroupItem>
            {/*<InputGroup>*/}
            <Row>


                <Col xs='5'>
                    <InputGroupAddon addonType="prepend">
                        {name}
                    </InputGroupAddon>
                </Col>
                <Col xs='6'>

            <ButtonToolbar>
                <ButtonGroup>
                    <Button onClick={() => props.counterChange(id, -1)}>-</Button>
                    <Button disabled={true} >
                        <InputGroupAddon addonType="append" xs='3' outline color="secondary">
                            {value}
                        </InputGroupAddon>
                    </Button>
                    <Button onClick={() => props.counterChange(id, 1)}>+</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="danger" onClick={() => props.removeItem(id)}>Delete</Button>
                    <Button color="warning" onClick={() => props.resetItem(id)}>Reset</Button>
                </ButtonGroup>
            </ButtonToolbar>
                </Col>
            </Row>
            {/*</InputGroup>*/}
        </ListGroupItem>
    );
};