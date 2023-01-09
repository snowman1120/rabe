import {connect} from 'react-redux';
import { sendEmailVerification } from 'actions/auth';
import { useEffect } from 'react';

const SignupVerify = ({sendEmailVerification}) => {
    useEffect(() => {
        sendEmailVerification(window.localStorage.getItem('signup-email-address'));
    }, []);
    const onClickResendEmail = () => {
        sendEmailVerification(window.localStorage.getItem('signup-email-address'));
    }

    return (
        <div className='registration clear__top'>
            <h3 className="text-center mb-4">Verify your email to proceed</h3>
            <div>
                {
                    window.localStorage.getItem('signup-email-address') ? <p className='text-center'>We just sent an email to the address: {window.localStorage.getItem('signup-email-address')} <br/>
                    Please check your email and click on the link provided to verify your address.</p> : 
                    <p className='text-center'>Something went wrong. Please press F5 and try again.</p>
                }
                <div className='mt-4'>
                    <button className='button button--effect d-sm-block next-button m-auto' onClick={onClickResendEmail}>Resend Verification Email</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {sendEmailVerification}) (SignupVerify);