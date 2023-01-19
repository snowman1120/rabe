import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import Footer from 'layout/footer/Footer';
import {isEmpty} from 'utils/validation';

import { sendMessage } from 'actions/contactUs';
import Loading from 'components/Loading';
const ContactUs = ({ serverErrors, sendMessage }) => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        msg: ''
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onKeyDownInput = (e) => {
        if(e.keyCode === 13) onSubmit();
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
            setLoading(true);
            sendMessage(formData, () => setLoading(false));
        }
    }
    return (
        <div>
            <Loading showYou={loading} />
            {/* <!-- ==== banner section start ==== --> */}
            <section className="support__banner contact__banner bg__img clear__top"
                data-background="./assets/images/contact-banner-bg.png">
                <div className="container">
                    <div className="support__banner__area">
                        <div className="support__banner__inner">
                            <h1 className="neutral-top">How can we help?</h1>
                            <h5 className="neutral-top">Got a question?</h5>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #banner section end ==== --> */}

            {/* <!-- ==== contact overview section start ==== --> */}
            {/* <section className="contact__overview">
                <div className="container">
                    <div className="contact__overview__area">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact__overview__single column__space--secondary shadow__effect">
                                    <img src="assets/images/icons/email.png" alt="email" />
                                    <h5>Send Us an Email</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                                    <hr />
                                    <p className="neutral-bottom">
                                        <a href="/cdn-cgi/l/email-protection#a7c2dfc6cad7cbc2e7c2dfc6cad7cbc289c4c8ca"><span className="__cf_email__" data-cfemail="4d2e2223392c2e390d3f283b283e39632e2220">[email&#160;protected]</span></a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact__overview__single column__space--secondary shadow__effect">
                                    <img src="assets/images/icons/phone.png" alt="Call" />
                                    <h5>Give Us a Call</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                                    <hr />
                                    <p className="neutral-bottom">
                                        <a href="tel:+17087362094">(414) 807 - 7478</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- ==== #contact overview section end ==== --> */}

            {/* <!-- ==== ask section start ==== --> */}
            <section className="ask section__space bg__img" data-background="./assets/images/ask-bg.png">
                <div className="container">
                    <div className="ask__area">
                        <div className="alert__newsletter__area">
                            <div className="section__header">
                                <h2 className="neutral-top">Ask a Question</h2>
                            </div>
                            <div className='mt-4'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="askFirstName">First Name*</label>
                                            <input type="text" name="firstName" id="askFirstName"
                                                placeholder="Enter Your First Name" required="required" value={formData.firstName} onChange={onChange} onKeyDown={onKeyDownInput} />
                                            {!isEmpty(errors.firstName) ? <div className="error__message">{errors.email}</div> : ''}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="askLastName">Last Name*</label>
                                            <input type="text" name="lastName" id="askLastName"
                                                placeholder="Enter Your Last Name" required="required" value={formData.lastName} onChange={onChange} onKeyDown={onKeyDownInput} />
                                            {!isEmpty(errors.lastName) ? <div className="error__message">{errors.email}</div> : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askRegistrationMail">Email*</label>
                                    <input type="email" name="email" id="askRegistrationMail"
                                        placeholder="Enter your email" required="required" value={formData.email} onChange={onChange} onKeyDown={onKeyDownInput} />
                                    {!isEmpty(errors.email) ? <div className="error__message">{errors.email}</div> : ''}
                                </div>
                                <div className="input input--secondary input__alt">
                                    <label htmlFor="askNumber">Phone*</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            {/* <select className="number__code__select" id="numberCodeSelectAlert">
                                                <option selected value="0">+1</option>
                                                <option value="1">+2</option>
                                                <option value="2">+3</option>
                                                <option value="3">+4</option>
                                                <option value="4">+5</option>
                                                <option value="5">+6</option>
                                            </select> */}
                                            <span>+1</span>
                                        </div>
                                        <input type="number" name="phoneNumber" id="askNumber" required="required"
                                            placeholder="345-323-1234" value={formData.phoneNumber} onChange={onChange} onKeyDown={onKeyDownInput} />
                                    </div>
                                    {!isEmpty(errors.phoneNumber) ? <div className="error__message">{errors.email}</div> : ''}
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askSubject">Subject*</label>
                                    <input type="text" name="subject" id="askSubject" placeholder="Write Subject"
                                        required="required" value={formData.subject} onChange={onChange} onKeyDown={onKeyDownInput} />
                                    {!isEmpty(errors.subject) ? <div className="error__message">{errors.email}</div> : ''}
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askMessage">Message*</label>
                                    <textarea name="message" id="askMessage" required="required"
                                        placeholder="Write Message" value={formData.message} onChange={onChange} onKeyDown={onKeyDownInput}></textarea>
                                    {!isEmpty(errors.message) ? <div className="error__message">{errors.email}</div> : ''}
                                </div>
                                <div className="input__button">
                                    <button type="submit" className="button button--effect" onClick={onSubmit}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #ask section end ==== --> */}
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.user && state.auth.user.role
});

export default connect(mapStateToProps, {sendMessage}) (ContactUs);