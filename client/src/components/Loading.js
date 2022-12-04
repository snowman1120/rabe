import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({showYou}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(showYou) setShow(true);
        else setShow(false);
    }, [showYou]);

    return (
        <div>
            <Modal className='loading' show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body><Spinner className='loading-spinner' size='xl' animation="grow" variant="info" /></Modal.Body>
            </Modal>
        </div>
        
    )
}

export default Loading;