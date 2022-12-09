
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { isEmpty } from 'utils/validation';

const ContactModal = ( props ) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="lg"
        >
          <Modal.Body>
            <div className='success-modal text-center'>
              <h4 className='text-center mb-5'>Contact Information</h4>
              <div className='row'>
                <div className='col-4'>
                  <img className="avatar avatar-lg" src={!props.contactInfo || isEmpty(props.contactInfo.seller.avatar) ? "/assets/images/profile.jpg" : props.contactInfo.seller.avatar} alt="avatar" />
                  <div className='mt-2'>
                    {props.contactInfo && `${props.contactInfo.seller.firstName} ${props.contactInfo.seller.lastName}`}
                  </div>
                </div>
                <div className='col-8'>
                  <Table striped>
                      <tbody>
                          {/* <tr>
                              <td className='text-center'><b>Name</b></td>
                              <td className='text-center'>{props.contactInfo.seller && (`${props.contactInfo.seller.firstName} ${props.contactInfo.seller.lastName}`)}</td>
                          </tr> */}
                          <tr>
                              <td className='text-center'><b>Email Address</b></td>
                              <td className='text-center'>{props.contactInfo && props.contactInfo.seller.email}</td>
                          </tr>
                          <tr>
                              <td className='text-center'><b>Phone Number</b></td>
                              <td className='text-center'>{props.contactInfo && props.contactInfo.seller.phoneNumber}</td>
                          </tr>
                          <tr>
                              <td className='text-center'><b>Property Address</b></td>
                              <td className='text-center'>{props.contactInfo && props.contactInfo.property.address.full}</td>
                          </tr>
                      </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default ContactModal;
