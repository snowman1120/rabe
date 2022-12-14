
import Modal from 'react-bootstrap/Modal';

import Stripe from './stripe/Stripe';

const StripeModal = ( {show, onHide, propertyId} ) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className='success-modal'>
                <Stripe propertyId={propertyId} />
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default StripeModal;