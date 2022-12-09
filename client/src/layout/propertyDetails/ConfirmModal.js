
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = ( props ) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className='success-modal text-center'>
                <h4 className='text-center'>Are you sure to get this listing now for ${props.percentage}?</h4>
            </div>
            <div className='text-center mb-3'>
              <Button className='me-4 w-25' onClick={props.onConfirm}>Yes</Button>
              <Button className='w-25' onClick={props.onHide}>No</Button>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default ConfirmModal;
