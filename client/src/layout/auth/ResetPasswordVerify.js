import {connect} from 'react-redux';
import { sendEmailResetPassword } from 'actions/auth';
import { useEffect, useState } from 'react';
import {isEmpty} from 'utils/validation';

const ResetPasswordVerify = ({sendEmailResetPassword, serverErrors}) => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        window.localStorage.removeItem('email-address');
    }, []);

    const [errors, setErrors] = useState({
        email: '',
        msg: ''
    });
    
    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const onKeyDownInput = (e) => {
        if(e.keyCode === 13) onClickResendEmail();
    }

    const onClickResendEmail = () => {
        if(isEmpty(email)) {
            setErrors({email: 'Enter your email address.'});
            return;
        }
        setErrors({email: null});
        window.localStorage.setItem('email-address', email);
        sendEmailResetPassword(window.localStorage.getItem('email-address'));
    }

    return (
        <div className='registration clear__top' style={{margin: '200px 0 100px 0'}}>
            <h3 className="text-center mb-4">Verify your email to proceed</h3>
            <div>
                <div className="input input--secondary" style={{maxWidth: '400px', margin: 'auto'}}>
                    <label htmlFor="loginMail">Email*</label>
                    <input type="email" name="email" id="loginMail" placeholder="Enter your email"
                        required="required" onChange={onChange} onKeyDown={onKeyDownInput} />
                    {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                </div>
                {
                    window.localStorage.getItem('email-address') ? <p className='text-center'>We just sent an email to the address: {window.localStorage.getItem('email-address')} <br/>
                    Please check your email and click on the link provided to verify your address.</p> : 
                    <p className='text-center'>Please enter your email address and click send button.</p>
                }
                <div className='mt-4'>
                    <button className='button button--effect d-sm-block next-button m-auto' onClick={onClickResendEmail}>Send Verification Email</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {sendEmailResetPassword}) (ResetPasswordVerify);