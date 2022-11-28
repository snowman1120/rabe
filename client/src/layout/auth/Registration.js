import {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import { Navigate } from 'react-router-dom';
import $ from 'jquery';

import {isEmpty} from 'utils/validation';

import {register} from 'actions/auth';

window.jQuery = window.$ = $;

const Registration = ({serverErrors, register, isAuthenticated}) => {
    const selectRef = useRef();

    const [formData, setFormData] = useState({
        role : 'seller',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passConfirm: '',
    });

    const [privacyPolicy, setPrivacyPolicy] = useState(false);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passConfirm: '',
        msg: ''
    });

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onChangeCheckbox = (e) => {
        setPrivacyPolicy(e.target.checked);
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

        if(isEmpty(t_errors.password) && formData.password.length < 8) {
            t_errors = {...t_errors, password: 'Enter a password with 8 or more characters.'};
        } else if(isEmpty(t_errors.password) && formData.password !== formData.passConfirm) {
            t_errors = {...t_errors, password: 'The password and the password confirmation do not match.'}
        }
        setErrors({...t_errors});

        if(isEmpty(t_errors) && privacyPolicy) {
            // Send request
            setFormData({...formData, role: $(selectRef.current).val()});
            register({...formData, role: $(selectRef.current).val()});
        }
    }

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="registration__area">
                        <h4 className="neutral-top">Registration</h4>
                        <p>Already Registered? <a href="login">Login</a></p>
                        <div name="registration__form">
                            <div className="regi__type">
                                <label htmlFor="typeSelect">You are?</label>
                                <select className="type__select" ref={selectRef} id="typeSelect" name="role">
                                    <option value="seller">Seller</option>
                                    <option value="agent">Agent</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label htmlFor="firstName">First Name*</label>
                                        <input type="text" name="firstName" id="firstName" placeholder="First Name"
                                            required="required" onChange={onChangeInput} />
                                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label htmlFor="lastName">Last Name*</label>
                                        <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                                            required="required" onChange={onChangeInput} />
                                        {!isEmpty(errors.lastName) ? <div className="error__message">{errors.lastName}</div> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="input input--secondary">
                                <label htmlFor="registrationMail">Email*</label>
                                <input type="email" name="email" id="registrationMail"
                                    placeholder="Enter your email" required="required" onChange={onChangeInput} />
                                {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                            </div>
                            <div className="input input--secondary">
                                <label htmlFor="regiPass">Password*</label>
                                <input type="password" name="password" id="regiPass" placeholder="Password"
                                    required="required" onChange={onChangeInput} />
                                {!isEmpty(errors.password) ? <div className="error__message">{errors.password}</div> : ''}
                            </div>
                            <div className="input input--secondary">
                                <label htmlFor="passCon">Password Confirmation*</label>
                                <input type="password" name="passConfirm" id="passCon" placeholder="Password Confirm"
                                    required="required" onChange={onChangeInput} />
                                {!isEmpty(errors.passConfirm) ? <div className="error__message">{errors.passConfirm}</div> : ''}
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id="condtion" name="accept__condition" value="agree" onChange={onChangeCheckbox} />
                                    <span className="checkmark"></span>
                                    I have read and I agree to the <a href="key-risks.html">
                                        Privacy Policy</a>
                                </label>
                            </div>
                            <div className="input__button">
                                <button type="submit" className="button button--effect" onClick={onSubmit}>Create My Account</button>
                                {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #registration section end ==== --> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register}) (Registration);