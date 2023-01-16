
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
                  <img className="avatar avatar-lg" src={!props.contactinfo || isEmpty(props.contactinfo.avatar) ? "/assets/images/profile.jpg" : props.contactinfo.avatar} alt="avatar" />
                  <div className='mt-2'>
                    {props.contactinfo && `${props.contactinfo.firstName} ${props.contactinfo.lastName}`}
                  </div>
                </div>
                <div className='col-8'>
                  <Table striped>
                      <tbody>
                          {/* <tr>
                              <td className='text-center'><b>Name</b></td>
                              <td className='text-center'>{props.contactinfo && (`${props.contactinfo.firstName} ${props.contactinfo.lastName}`)}</td>
                          </tr> */}
                          <tr>
                              <td className='text-center'><b>Email Address</b></td>
                              <td className='text-center'>{props.contactinfo && props.contactinfo.email}</td>
                          </tr>
                          <tr>
                              <td className='text-center'><b>Phone Number</b></td>
                              <td className='text-center'>{props.contactinfo && props.contactinfo.phoneNumber}</td>
                          </tr>
                          <tr>
                              <td className='text-center'><b>License Number</b></td>
                              <td className='text-center'>{props.contactinfo && props.contactinfo.licenseNumber}</td>
                          </tr>
                          <tr>
                              <td className='text-center'><b>Agent Name</b></td>
                              <td className='text-center'>{props.contactinfo && props.contactinfo.agentName}</td>
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
