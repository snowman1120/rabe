
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SuccessModal = ( props ) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className='success-modal'>
                <div className="success-modal-mark">
                    <img src='/assets/images/icons/success-green-check-mark-icon.png' alt='' />
                </div>
                <p className='success-modal-message'>{props.message ? props.message : ''}</p>
                <p className='success-modal-note'>
                    {props.goto ? <span>{props.goto.description_1}</span> : ''}
                    {props.goto ? <a href={props.goto.url}>&nbsp;{props.goto.name}&nbsp;</a> : ''}
                    {props.goto ? <span>{props.goto.description_2}</span> : ''}
                </p>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      );
}

export default SuccessModal;