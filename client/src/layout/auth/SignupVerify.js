import {connect} from 'react-redux';
import { sendEmailSignup } from 'actions/auth';
import { useEffect } from 'react';

const SignupVerify = ({sendEmailSignup}) => {
    useEffect(() => {
        if(!window.localStorage.getItem('email-address')) window.location.href = '/';
        sendEmailSignup(window.localStorage.getItem('email-address'));
    }, []);
    const onClickResendEmail = () => {
        sendEmailSignup(window.localStorage.getItem('email-address'));
    }

    return (
        <div className='registration clear__top' style={{margin: '200px 0 100px 0'}}>
            <h3 className="text-center mb-4">Verify your email to proceed</h3>
            <div>
                {
                    window.localStorage.getItem('email-address') ? <p className='text-center'>We just sent an email to the address: {window.localStorage.getItem('email-address')} <br/>
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

export default connect(mapStateToProps, {sendEmailSignup}) (SignupVerify);