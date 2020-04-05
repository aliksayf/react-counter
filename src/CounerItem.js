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
                    <InputGroupAddon addonType="">
                        {name}
                    </InputGroupAddon>
                </Col>
                <Col xs='6'>

            <ButtonToolbar>
                <ButtonGroup>
                    <Button onClick={() => props.counterChange(id, -1)}>-</Button>
                    <Button disabled={true} >
                        <InputGroupAddon  outline color="secondary" addonType="" >
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