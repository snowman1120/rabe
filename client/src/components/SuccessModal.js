
import Modal from 'react-bootstrap/Modal';

const SuccessModal = ( props ) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
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
        </Modal>
      );
}

export default SuccessModal;