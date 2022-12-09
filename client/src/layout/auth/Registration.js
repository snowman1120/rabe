import {useState} from 'react';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';
import SelectUser from './SelectUser';
import SellerReg from './SellerReg';
import AgentReg from './AgentReg';

const Registration = ({isAuthenticated}) => {
    const [youare, setYouare] = useState(null);

    const onChangeUser = (user) => {
        setYouare(user);
    }

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
        <section className="registration clear__top">
            <div className="container">
                <div className="registration__area" style={{maxWidth: (!youare || youare === 'seller' ? '640px' : '100%')}}>
                    <h4 className="neutral-top">{!youare ? '' : (youare === 'seller' ? 'Seller' : 'Agent')}&nbsp;Sign up</h4>
                    <p>Already Registered? <a href="login">Login</a></p>
                    {
                        !youare ? (<SelectUser onChange={onChangeUser} />) :
                        (
                            youare === 'seller' ? (<SellerReg />) : (<AgentReg />)
                        )
                    }
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {}) (Registration);