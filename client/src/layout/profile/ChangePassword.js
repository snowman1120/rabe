import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import {isEmpty} from 'utils/validation';
import Footer from 'layout/footer/Footer';

import {changePassword} from 'actions/auth';

const ChangePassword = ({serverErrors, passwordChanged, changePassword, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        password: '',
        passConfirm: '',
    });

    const [errors, setErrors] = useState({
        oldPassword: '',
        password: '',
        passConfirm: '',
    });

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

        if(isEmpty(t_errors.password) && formData.password.length < 8) {
            t_errors = {...t_errors, password: 'Enter a password with 8 or more characters.'};
        } else if(isEmpty(t_errors.password) && formData.password !== formData.passConfirm) {
            t_errors = {...t_errors, password: 'The password and the password confirmation do not match.'}
        } else if(formData.password === formData.oldPassword) {
            t_errors = {...t_errors, msg: 'The old password and new password are same.'}
        }

        setErrors({...t_errors});

        if(isEmpty(t_errors)) {
            // Send request
            changePassword(formData);
        }
    }

    if (isAuthenticated === false) {
      return <Navigate to="/" />;
    }

    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="registration__area">
                        <h4 className="neutral-top">Change my password</h4>
                        <div name="registration__form">
                            <div className="row">
                                <div className="input input--secondary">
                                    <label htmlFor="oldPassword">Old Password*</label>
                                    <input type="password" name="oldPassword" id="oldPassword" placeholder="Old Password"
                                        required="required" value={formData.oldPassword} onChange={onChangeInput} />
                                    {!isEmpty(errors.oldPassword) ? <div className="error__message">{errors.oldPassword}</div> : ''}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="input input--secondary">
                                    <label htmlFor="password">New Password*</label>
                                    <input type="password" name="password" id="password" placeholder="New Password"
                                        required="required" value={formData.password} onChange={onChangeInput} />
                                    {!isEmpty(errors.password) ? <div className="error__message">{errors.password}</div> : ''}
                                </div>
                            </div>
                            <div className="input input--secondary">
                                <label htmlFor="registrationMail">Enter password again*</label>
                                <input type="password" name="passConfirm" id="registrationMail"
                                    placeholder="Enter your passConfirm" required="required" value={formData.passConfirm} onChange={onChangeInput} />
                                {!isEmpty(errors.passConfirm) ? <div className="error__message">{errors.passConfirm}</div> : ''}
                            </div>
                            <div className="input__button">
                                <button type="submit" className="button button--effect" onClick={onSubmit}>Change my password</button>
                                {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
                                {passwordChanged ? <div className='notification_message'>Your password has been changed</div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #registration section end ==== --> */}
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated,
    passwordChanged: state.auth.passwordChanged
});

export default connect(mapStateToProps, {changePassword}) (ChangePassword);