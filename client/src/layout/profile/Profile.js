import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import { Navigate } from 'react-router-dom';

import SuccessModal from 'components/SuccessModal';
import ImageUpload from './ImageUpload';

import {isEmpty} from 'utils/validation';

import {update, setProfile} from 'actions/auth';

const Profile = ({serverErrors, update, setProfile, user, isAuthenticated}) => {
    const [modalShow, setModalShow] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        msg: ''
    });

    useEffect(() => {
        setFormData({
            ...formData, 
            firstName: user ? user.firstName : '',
            lastName: user ? user.lastName : '',
            email: user ? user.email : '',
            phoneNumber: user ? user.phoneNumber : ''
        });
    }, [user]);

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async () => {
        let t_errors = {};
        Object.keys(formData).forEach((key) => {
            if(isEmpty(formData[key])) {
                t_errors = {...t_errors, [key]: 'Required field'};
            }
        });

        if(isEmpty(t_errors.email) && !validator.isEmail(formData.email)) {
            t_errors = {...t_errors, email: 'Enter a valid email!'}
        }

        setErrors({...t_errors});

        if(isEmpty(t_errors)) {
            // Send request
            update(formData, success);
        }
    }

    const success = () => {
        setModalShow(true);
    }

    const onChangeProfile = (profile) => {
        setProfile(profile);
    }

    if (isAuthenticated === false) {
      return <Navigate to="/" />;
    }

    const avatar = user && user.avatar ? user.avatar : "assets/images/profile.jpg";
    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="profile__area">
                        <h4 className="neutral-top">Profile</h4>
                        <div className='row'>
                            <div className='col-md-5 col-sm-12'>
                                <ImageUpload handleImage={onChangeProfile} defaultImage={avatar} />
                            </div>
                            <div className="col-md-7 col-sm-12 registration__form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="firstName">First Name*</label>
                                            <input type="text" name="firstName" id="firstName" placeholder="First Name"
                                                required="required" value={formData.firstName} onChange={onChangeInput} />
                                            {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="lastName">Last Name*</label>
                                            <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                                                required="required" value={formData.lastName} onChange={onChangeInput} />
                                            {!isEmpty(errors.lastName) ? <div className="error__message">{errors.lastName}</div> : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="registrationMail">Email*</label>
                                    <input type="email" name="email" id="registrationMail"
                                        placeholder="Enter your email" required="required" value={formData.email} onChange={onChangeInput} />
                                    {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="regiPass">Phone Number</label>
                                    <input type="text" name="phoneNumber" id="regiPass" placeholder="Phone Number"
                                        required="required" value={formData.phoneNumber} onChange={onChangeInput} />
                                    {!isEmpty(errors.phoneNumber) ? <div className="error__message">{errors.phoneNumber}</div> : ''}
                                </div>
                                <p>
                                    <a href="/change-password">Change my password</a>
                                </p>
                                <p>
                                    <a href="/">Delete my account</a>
                                </p>
                                <div className="input__button">
                                    <button type="submit" className="button button--effect" onClick={onSubmit}>Change my profile</button>
                                    {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #registration section end ==== --> */}
            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                message="You have successfully updated your profile"
                goto={{
                    description_1: 'Click',
                    url: '/list-your-property',
                    name: 'here',
                    description_2: 'to see your property list'
                }}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, {update, setProfile}) (Profile);