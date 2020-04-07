import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Input} from 'reactstrap';

const ModalExample = (props) => {
    const {
        className,
        toggle,
        modal,
        counterName,
        removeItem
    } = props;

    const [disabledDelete, setDisabledDelete] = useState(true);

    const checkConfirmName = (e) => {
        if (e.trim().toLowerCase() === counterName.name.toLowerCase()) {
            setDisabledDelete(false);
        } else setDisabledDelete(true);
    }

    const deleteHandler = () => {
        toggle();
        removeItem(counterName.id);
    };

    const keyPressed = (e) => {
        if (e.key === "Enter") {
            deleteHandler()
        }
    };


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Delete confirmation</ModalHeader>
                <ModalBody toggle={toggle}>
                    Please enter counter name <strong>{counterName.name}</strong> to delete it
                </ModalBody>
                <Input onChange={(e) => checkConfirmName(e.target.value)} onKeyPress={keyPressed} />
                <ModalFooter>
                    <Button disabled={disabledDelete} color="danger" onClick={deleteHandler}>Delete</Button>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;