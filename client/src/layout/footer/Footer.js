
const Footer = () => {
    return (
        <div>
            {/* <!-- ==== footer section start ==== --> */}
            <footer className="footer pos__rel over__hi">
                <div className="container">
                    <div className="footer__newsletter">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="footer__newsletter__content column__space">
                                    <h3>Subscribe for updates</h3>
                                    <p>Stay on top of the latest blog posts, news and announcements</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-5 offset-xxl-1">
                                <div className="footer__newsletter__form">
                                    <form action="#" method="post">
                                        <div className="footer__newsletter__input__group">
                                            <div className="input">
                                                <input type="email" name="news__letter" id="newsLetterMail"
                                                    placeholder="Enter Your Email" required="required" />
                                            </div>
                                            <button type="submit" className="button button--effect">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__area section__space">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <div className="footer__intro">
                                    <a href="index.html">
                                        <img src="assets/images/logo-light.png" alt="Revest" className="logo" />
                                    </a>
                                    <p>Revest is a platform offering anyone the ability to invest and potentially earn money
                                        from property at the click of a button</p>
                                    <div className="social">
                                        <a href="javascript:void(0)">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                                <div className="footer__links footer__links--alt">
                                    <h5>Company</h5>
                                    <ul>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="career.html">Careers</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                        <li className="neutral-bottom">
                                            <a href="affiliate-program.html">Affiliate</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                                <div className="footer__links footer__links--alt">
                                    <h5>Invest</h5>
                                    <ul>
                                        <li>
                                            <a href="properties.html">Browse Properties</a>
                                        </li>
                                        <li>
                                            <a href="how-it-works.html">How it works</a>
                                        </li>
                                        <li>
                                            <a href="loan-application.html">Loan Application </a>
                                        </li>
                                        <li>
                                            <a href="property-alert.html">Property Alerts</a>
                                        </li>
                                        <li className="neutral-bottom">
                                            <a href="support.html">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                                <div className="footer__links footer__links--alt--two">
                                    <h5>Insights</h5>
                                    <ul>
                                        <li>
                                            <a href="support.html">Help Center</a>
                                        </li>
                                        <li>
                                            <a href="list-your-property.html">List Your Property</a>
                                        </li>
                                        <li className="neutral-bottom">
                                            <a href="loyality-program.html">Loyality program </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                                <div className="footer__links">
                                    <h5>Legal</h5>
                                    <ul>
                                        <li>
                                            <a href="privacy-policy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="terms-conditions.html">Term & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="cookie-policy.html">Cookie Policy</a>
                                        </li>
                                        <li className="neutral-bottom">
                                            <a href="key-risks.html">Key Risks</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__credit">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-9 order-1 order-sm-0">
                                <div className="footer__copyright">
                                    <p>Copyright &copy; Revest | Designed by <a
                                            href="https://themeforest.net/user/pixelaxis">Pixelaxis</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer__language">
                                    <select className="language-select">
                                        <option value="english">En</option>
                                        <option value="australia">Aus</option>
                                        <option value="brazil">Bra</option>
                                        <option value="argentina">Arg</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__animation">
                    <img src="assets/images/footer/footer__left__circle.png" alt="Circle" className="left__circle" />
                    <img src="assets/images/footer/footer__right__circle.png" alt="Circle" className="right__circle" />
                    <img src="assets/images/footer/footer__home___illustration.png" alt="Home" className="home__illustration" />
                </div>
            </footer>
        </div>
    )
}

export default Footer;