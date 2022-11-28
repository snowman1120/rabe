import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import { Navigate } from 'react-router-dom';
import {isEmpty} from 'utils/validation';

import {login} from 'actions/auth';

const Login = ({serverErrors, login, role, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        msg: ''
    });

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onChangeCheckbox = (e) => {
        setRememberMe(e.target.checked);
    }

    const onSubmit = () => {
        let t_errors = {};
        Object.keys(formData).forEach((key) => {
            if(isEmpty(formData[key])) {
                t_errors = {...t_errors, [key]: 'Required field'};
            }
        });

        if(isEmpty(t_errors.email) && !validator.isEmail(formData.email)) {
            t_errors = {...t_errors, email: 'Enter a valid email!'}
        }

        setErrors({...t_errors});

        if(isEmpty(t_errors)) {
            // Send request
            login(formData);
        }
    }

    if (isAuthenticated) {
        if(role === 'admin') return <Navigate to="/admin/dashboard" />;
        return <Navigate to="/" />;
    }

    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="registration__area">
                        <h4 className="neutral-top">Log in</h4>
                        <p>Don't have an account? <a href="registration">Register here.</a></p>
                        <div name="login__form" className="form__login">
                            <div className="input input--secondary">
                                <label htmlFor="loginMail">Email*</label>
                                <input type="email" name="email" id="loginMail" placeholder="Enter your email"
                                    required="required" onChange={onChange} />
                                {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                            </div>
                            <div className="input input--secondary">
                                <label htmlFor="loginPass">Password*</label>
                                <input type="password" name="password" id="loginPass" placeholder="Password"
                                    required="required" onChange={onChange} />
                                {!isEmpty(errors.password) ? <div className="error__message">{errors.password}</div> : ''}
                            </div>
                            <div className="checkbox login__checkbox">
                                <label>
                                    <input type="checkbox" id="remeberPass" name="remeber__pass" value="remember" onChange={onChangeCheckbox} />
                                    <span className="checkmark"></span>
                                    Remember Me
                                </label>
                                <a href="#!">Forget Password</a>
                            </div>
                            <div className="input__button">
                                <button type="submit" className="button button--effect" onClick={onSubmit}>Login</button>
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
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.user && state.auth.user.role
});

export default connect(mapStateToProps, {login}) (Login);