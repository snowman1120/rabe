import {connect} from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'components/Loading';
import {verifyToken} from 'actions/auth';

const EmailVerification = ({verifyToken}) => {
    const {token} = useParams();
    useEffect(() => {
        verifyToken(token);
    }, []);

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

export default connect(mapStateToProps, {verifyToken}) (EmailVerification);