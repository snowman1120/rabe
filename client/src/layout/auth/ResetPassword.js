import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import {isEmpty} from 'utils/validation';

import Footer from 'layout/footer/Footer';
import { resetPassword } from '../../actions/auth';

const EmailVerification = ({serverErrors, resetPassword}) => {
    const [formData, setFormData] = useState({
      password: '',
    });

    const [token, setToken] = useState('');

    const [errors, setErrors] = useState({
        password: '',
        msg: ''
    });

    useEffect(() => {
      if(!window.localStorage.getItem('token')) window.location.href = '/login';
      setToken(window.localStorage.getItem('token'));
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('email-address');
    }, []);
    
    useEffect(() => {
      setErrors(serverErrors);
    }, [serverErrors]);

    const onChangeInput = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
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

      setErrors({...t_errors});

      if(isEmpty(t_errors)) resetPassword({...formData, token}, () => window.location.href = '/login');
    }
    return (
      <div>
        <section className="registration clear__top">
          <div className="container">
              <div className="registration__area" style={{maxWidth: '640px'}}>
                  <h4 className="neutral-top">Reset Password</h4>
                  <div name="registration__form" className='mt-lg-4'>
                    <div className="input input--secondary">
                        <label htmlFor="regiPass">Password*</label>
                        <input type="password" name="password" id="regiPass" placeholder="Password"
                            required="required" onChange={onChangeInput} onKeyDown={onKeyDownInput}  />
                        {!isEmpty(errors.password) ? <div className="error__message">{errors.password}</div> : ''}
                    </div>
                    <div className="input__button">
                        <button type="submit" className="button button--effect" onClick={onSubmit}>Reset password</button>
                        {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
                    </div>
                  </div>
              </div>
          </div>
        </section>
        <Footer />
      </div>
      
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {resetPassword}) (EmailVerification);