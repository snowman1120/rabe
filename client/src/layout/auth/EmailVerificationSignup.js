import {connect} from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'components/Loading';
import {verifySignupToken} from 'actions/auth';

const EmailVerification = ({verifySignupToken, isAuthenticated}) => {
    const {token} = useParams();
    useEffect(() => {
        verifySignupToken(token, () => window.location.href = '/');
    }, []);

    useEffect(() => {
        if(isAuthenticated === true) window.location.href = '/';
    }, [isAuthenticated]);
    return (
        <div className='registration clear__top'>
            <Loading showYou={true} />
            <h3 className="text-center mb-4">Verifing Email</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {verifySignupToken}) (EmailVerification);