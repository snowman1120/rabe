import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';

import {isEmpty} from 'utils/validation';

import {register} from 'actions/auth';

const AgentReg = ({serverErrors, register}) => {
    const [formData, setFormData] = useState({
        role : 'agent',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passConfirm: '',
        licenseNumber: '',
        stateLicensed: '',
        yearsOfExprerience: '',
        affiliations: '',
        postalCode: ''
    });

    const [privacyPolicy, setPrivacyPolicy] = useState(false);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passConfirm: '',
        licenseNumber: '',
        stateLicensed: '',
        yearsOfExprerience: '',
        affiliations: '',
        postalCode: '',
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

    const onKeyDownInput = (e) => {
        if(e.keyCode === 13) onSubmit();
    }

    const onSubmit = async () => {
        let t_errors = {};
        Object.keys(formData).forEach((key) => {
            if(isEmpty(formData[key])) {
                t_errors = {...t_errors, [key]: 'Required field'};
            }
        });

        delete t_errors.affiliations;
        delete t_errors.yearsOfExprerience;

        if(isEmpty(t_errors.email) && !validator.isEmail(formData.email)) {
            t_errors = {...t_errors, email: 'Enter a valid email'}
        }

        if(isEmpty(t_errors.password) && formData.password.length < 8) {
            t_errors = {...t_errors, password: 'Enter a password with 8 or more characters.'};
        } else if(isEmpty(t_errors.password) && formData.password !== formData.passConfirm) {
            t_errors = {...t_errors, password: 'The password and the password confirmation do not match.'}
        }

        // if(!postcodeValidator(formData.postalCode, 'CA')) {
        //     t_errors = {...t_errors, email: 'Enter a valid postal code'}
        // }

        setErrors({...t_errors});

        if(isEmpty(t_errors) && privacyPolicy) {
            // Send request
            register(formData, () => window.location.href = '/signup/please-verify');
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6 col-sm-12 mt-3 pe-4' name="registration__form">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input input--secondary">
                                <label htmlFor="firstName">First Name*</label>
                                <input type="text" name="firstName" id="firstName" placeholder="First Name"
                                    required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                                {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input input--secondary">
                                <label htmlFor="lastName">Last Name*</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Last Name"
                                    required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                                {!isEmpty(errors.lastName) ? <div className="error__message">{errors.lastName}</div> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="registrationMail">Email*</label>
                        <input type="email" name="email" id="registrationMail"
                            placeholder="Enter your email" required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="regiPass">Password*</label>
                        <input type="password" name="password" id="regiPass" placeholder="Password"
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.password) ? <div className="error__message">{errors.password}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="passCon">Password Confirmation*</label>
                        <input type="password" name="passConfirm" id="passCon" placeholder="Password Confirm"
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.passConfirm) ? <div className="error__message">{errors.passConfirm}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="registrationPhoneNumber">Phone Number*</label>
                        <input type="text" name="phoneNumber" id="registrationPhoneNumber"
                            placeholder="Enter your phone number" required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.phoneNumber) ? <div className="error__message">{errors.phoneNumber}</div> : ''}
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mt-3 ps-4'>
                    <div className="input input--secondary">
                        <label htmlFor="postal-code">Postal Code*</label>
                        <input type="text" name="postalCode" id="postal-code" placeholder="Postal Code"
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.postalCode) ? <div className="error__message">{errors.postalCode}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="agentLicenseNumber">Agent License Number*</label>
                        <input type="text" name="licenseNumber" id="agentLicenseNumber"
                            placeholder="Enter your licenseNumber" required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.licenseNumber) ? <div className="error__message">{errors.licenseNumber}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="stateLicensed">State Licensed*</label>
                        <input type="text" name="stateLicensed" id="stateLicensed"
                            placeholder="Enter your phone number" required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.stateLicensed) ? <div className="error__message">{errors.stateLicensed}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="years-of-experience">Years of Experience</label>
                        <input type="number" name="yearsOfExprerience" id="years-of-experience" placeholder="Years of Experience"
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput} />
                        {!isEmpty(errors.yearsOfExprerience) ? <div className="error__message">{errors.yearsOfExprerience}</div> : ''}
                    </div>
                    <div className="input input--secondary">
                        <label htmlFor="affiliations">Affiliations</label>
                        <textarea name="affiliations" id="affiliations" placeholder="Affiliations" style={{minHeight: 'auto'}}
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput}></textarea>
                        {!isEmpty(errors.affiliations) ? <div className="error__message">{errors.affiliations}</div> : ''}
                    </div>
                </div>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" id="condtion" name="accept__condition" value="agree" onChange={onChangeCheckbox} />
                    <span className="checkmark"></span>
                    I have read and I agree to the <a href="key-risks">
                        Privacy Policy</a>
                </label>
            </div>
            <div className="input__button w-50 m-auto">
                <button type="submit" className="button button--effect" onClick={onSubmit}>Create My Account</button>
                {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register}) (AgentReg);