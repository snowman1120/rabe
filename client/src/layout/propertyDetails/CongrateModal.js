
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = ( props ) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className='success-modal text-center'>
                <div className="success-modal-mark">
                    <img src='/assets/images/icons/success-green-check-mark-icon.png' alt='' />
                </div>
                <h4 className='text-center'>Congratulations! <br/> You win.</h4>
                <h6 className='text-center'>You can see the contact information in <br /> My Proposals/winning.</h6>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default ConfirmModal;
