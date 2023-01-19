
import Footer from 'layout/footer/Footer';
const ContactUs = () => {
    return (
        <div>
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
            <section className="contact__overview">
                <div className="container">
                    <div className="contact__overview__area">
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
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
                            <div className="col-md-6 col-xl-4">
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
                            <div className="col-md-6 col-xl-4">
                                <div className="contact__overview__single shadow__effect">
                                    <img src="assets/images/icons/chat.png" alt="Chat" />
                                    <h5>Chat with us</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                                    <hr />
                                    <p className="neutral-bottom">
                                        <a href="#0">Open live chat</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #contact overview section end ==== --> */}

            {/* <!-- ==== ask section start ==== --> */}
            <section className="ask section__space bg__img" data-background="./assets/images/ask-bg.png">
                <div className="container">
                    <div className="ask__area">
                        <div className="alert__newsletter__area">
                            <div className="section__header">
                                <h2 className="neutral-top">Ask a Question</h2>
                            </div>
                            <form action="#" name="ask__from" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="askFirstName">First Name*</label>
                                            <input type="text" name="ask__first__name" id="askFirstName"
                                                placeholder="Enter Your First Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input input--secondary">
                                            <label htmlFor="askLastName">Last Name*</label>
                                            <input type="text" name="ask__last__name" id="askLastName"
                                                placeholder="Enter Your Last Name" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askRegistrationMail">Email*</label>
                                    <input type="email" name="ask__registration__email" id="askRegistrationMail"
                                        placeholder="Enter your email" required="required" />
                                </div>
                                <div className="input input--secondary input__alt">
                                    <label htmlFor="askNumber">Phone*</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <select className="number__code__select" id="numberCodeSelectAlert">
                                                <option selected value="0">+1</option>
                                                <option value="1">+2</option>
                                                <option value="2">+3</option>
                                                <option value="3">+4</option>
                                                <option value="4">+5</option>
                                                <option value="5">+6</option>
                                            </select>
                                        </div>
                                        <input type="number" name="ask__number" id="askNumber" required="required"
                                            placeholder="345-323-1234" />
                                    </div>
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askSubject">Subject*</label>
                                    <input type="text" name="ask__subject" id="askSubject" placeholder="Write Subject"
                                        required="required" />
                                </div>
                                <div className="input input--secondary">
                                    <label htmlFor="askMessage">Message*</label>
                                    <textarea name="ask_message" id="askMessage" required="required"
                                        placeholder="Write Message"></textarea>
                                </div>
                                <div className="input__button">
                                    <button type="submit" className="button button--effect">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #ask section end ==== --> */}

            {/* <!-- ==== faq section start ==== --> */}
            <section className="faq section__space">
                <div className="container">
                    <div className="faq__area">
                        <div className="section__header">
                            <h2 className="neutral-top">Frequently Asked
                                Questions</h2>
                        </div>
                        <div className="faq__group">
                            <div className="accordion" id="accordionExampleFund">
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundOne">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundOne" aria-expanded="true"
                                            aria-controls="collapseFundOne">
                                            What is Revest?
                                        </button>
                                    </h5>
                                    <div id="collapseFundOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingFundOne" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundTwo">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundTwo" aria-expanded="false"
                                            aria-controls="collapseFundTwo">
                                            What are the benefits of investing via Revest?
                                        </button>
                                    </h5>
                                    <div id="collapseFundTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingFundTwo" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundThree">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundThree" aria-expanded="false"
                                            aria-controls="collapseFundThree">
                                            What makes Revest different?
                                        </button>
                                    </h5>
                                    <div id="collapseFundThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingFundThree" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundFour">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundFour" aria-expanded="false"
                                            aria-controls="collapseFundFour">
                                            What happens to my investments if Revest goes into bankruptcy?
                                        </button>
                                    </h5>
                                    <div id="collapseFundFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFundFour" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundFive">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundFive" aria-expanded="false"
                                            aria-controls="collapseFundFive">
                                            What regulations apply to Revest?
                                        </button>
                                    </h5>
                                    <div id="collapseFundFive" className="accordion-collapse collapse"
                                        aria-labelledby="headingFundFive" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p>combined with a handful of model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item content__space">
                                    <h5 className="accordion-header" id="headingFundSix">
                                        <span className="icon_box">
                                            <img src="assets/images/icons/message.png" alt="Fund" />
                                        </span>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFundSix" aria-expanded="false"
                                            aria-controls="collapseFundSix">
                                            How do I Fund investing in Revest?
                                        </button>
                                    </h5>
                                    <div id="collapseFundSix" className="accordion-collapse collapse"
                                        aria-labelledby="headingFundSix" data-bs-parent="#accordionExampleFund">
                                        <div className="accordion-body">
                                            <p className="neutral-top neutral-bottom">combined with a handful of model sentence
                                                structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is therefore always free
                                                from
                                                repetition, injected humour, or</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #faq section end ==== --> */}
            <Footer />
        </div>
    )
}

export default ContactUs;