import {useState, useEffect} from 'react';

const Registration = () => {
    const errors = [

    ]
    return (
        <div>
            {/* <!-- ==== registration section start ==== --> */}
            <section className="registration clear__top">
                <div className="container">
                    <div className="registration__area">
                        <h4 className="neutral-top">Registration</h4>
                        <p>Already Registered? <a href="login">Login</a></p>
                        <form action="#" method="post" name="registration__form">
                            <div className="regi__type">
                                <label for="typeSelect">You are?</label>
                                <select className="type__select" id="typeSelect">
                                    <option value="seller">Seller</option>
                                    <option value="agent">Agent</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label for="firstName">First Name*</label>
                                        <input type="text" name="first__name" id="firstName" placeholder="First Name"
                                            required="required" />
                                        {/* <div className="error__message">Required field</div> */}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label for="lastName">Last Name*</label>
                                        <input type="text" name="last__name" id="lastName" placeholder="Last Name"
                                            required="required" />
                                    </div>
                                </div>
                            </div>
                            <div className="input input--secondary">
                                <label for="registrationMail">Email*</label>
                                <input type="email" name="registration__email" id="registrationMail"
                                    placeholder="Enter your email" required="required" />
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label for="regiPass">Password*</label>
                                        <input type="password" name="regi__pass" id="regiPass" placeholder="Password"
                                            required="required" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input input--secondary">
                                        <label for="passCon">Password Confirmation*</label>
                                        <input type="password" name="pass__con" id="passCon" placeholder="Password Confirm"
                                            required="required" />
                                    </div>
                                </div>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id="condtion" name="accept__condition" value="agree" />
                                    <span className="checkmark"></span>
                                    I have read and I agree to the <a href="key-risks.html">
                                        Privacy Policy</a>
                                </label>
                            </div>
                            <div className="input__button">
                                <button type="submit" className="button button--effect">Create My Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #registration section end ==== --> */}
        </div>
    )
}

export default Registration;