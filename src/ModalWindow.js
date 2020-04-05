import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        className,
        toggle,
        modal
    } = props;


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody toggle={toggle}>Please enter counter name!</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;