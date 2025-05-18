import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProfileCard = ({ show, setShow, selectUser }) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="m-2">
                <img
                    src={selectUser.avatar}
                    alt={selectUser.name}
                    className="w-100 rounded-circle"
                />
                <div className="text-center pt-4 ">
                    <h5>{selectUser.name}</h5>
                    <p className=" text-muted">{selectUser.designation}</p>
                </div>
                <Button className="w-100" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
};
export default ProfileCard;
