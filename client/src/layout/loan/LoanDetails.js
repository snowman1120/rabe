import Iframe from 'react-iframe';

const LoanDetails = () => {
    return (
        <div>
            {/* <!-- ==== details section start ==== --> */}
            <div className="property__details__banner bg__img clear__top" data-background="./assets/images/construction.png">
            </div>
            <section className="p__details p__details__two faq section__space__bottom">
                <div className="container">
                    <div className="p__details__area">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p__details__content">
                                    <a href="#gallery" className="button button--effect button--secondary"><i
                                            className="fa-solid fa-images"></i> Browse Gallery</a>
                                    <div className="intro">
                                        <h3>How much will I earn if I <span>invest:</span></h3>
                                    </div>
                                    <div className="investment__amount__area">
                                        <div className="investment__wrapper">
                                            <div className="investment__wrapper__inner">
                                                <h5>Investment Amount (100 €-30991€)</h5>
                                                <div className="input input--secondary">
                                                    <input type="number" name="invest__amount" id="investAmount"
                                                        placeholder="5000" required="required" />
                                                </div>
                                                <div className="radio__group">
                                                    <div>
                                                        <input type="radio" id="pone" checked className="radio-input"
                                                            name="radio-group"/>
                                                        <label for="pone" className="radio-label"> <span
                                                                className="radio-border"></span> 13% </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="ptwo" checked className="radio-input"
                                                            name="radio-group"/>
                                                        <label for="ptwo" className="radio-label"> <span
                                                                className="radio-border"></span> 13.25%
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="pthree" checked className="radio-input"
                                                            name="radio-group"/>
                                                        <label for="pthree" className="radio-label"> <span
                                                                className="radio-border"></span> 13.5%
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="pfour" checked className="radio-input"
                                                            name="radio-group"/>
                                                        <label for="pfour" className="radio-label"> <span
                                                                className="radio-border"></span> 14% </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="investment__footer">
                                                <div>
                                                    <p className="secondary">I will earn ( 01 Month )</p>
                                                    <h4 className="neutral-bottom">O.72 <i className="fa-solid fa-euro-sign"></i></h4>
                                                </div>
                                                <div>
                                                    <p className="secondary">I will earn ( 12 Month )</p>
                                                    <h4 className="neutral-bottom">11.72 <i className="fa-solid fa-euro-sign"></i></h4>
                                                </div>
                                                <div>
                                                    <p className="secondary">I will earn ( 24 Month )</p>
                                                    <h4 className="neutral-bottom">17.72 <i className="fa-solid fa-euro-sign"></i></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group__one">
                                        <h4>About the loan</h4>
                                        <p>Purpose of the loan To increase the company's working capital</p>
                                        <div className="tabular__group">
                                            <div className="single">
                                                <p>Amount of funding</p>
                                                <p>40,000 €</p>
                                            </div>
                                            <div className="single">
                                                <p>Risk</p>
                                                <p>C (Higher)</p>
                                            </div>
                                            <div className="single">
                                                <p>Payment of interest</p>
                                                <p>Every Month</p>
                                            </div>
                                            <div className="single">
                                                <p>Loan Repayment</p>
                                                <p>Every Month</p>
                                            </div>
                                            <div className="single">
                                                <p>Loan Repayment postponement</p>
                                                <p>3</p>
                                            </div>
                                            <div className="single">
                                                <p>Loan Period</p>
                                                <p>24 Months</p>
                                            </div>
                                            <div className="single">
                                                <p>Minimum Loan Period</p>
                                                <p>4 Months</p>
                                            </div>
                                            <div className="single">
                                                <p>collateral</p>
                                                <p>Guarantes/ Surety</p>
                                            </div>
                                            <div className="single">
                                                <p>Mortgage Rank</p>
                                                <p>Other Pledge</p>
                                            </div>
                                        </div>
                                        <p className="neutral-bottom">The purpose of the financing is to partially refinance an
                                            existing loan on the Nordstreet platform. Refinancing is requested to adjust
                                            financial flows. </p>
                                    </div>
                                    <div className="group__one">
                                        <h4>Interest</h4>
                                        <p>Annual interest rate</p>
                                        <div className="tabular__group">
                                            <div className="single">
                                                <p>Investing from 100 €</p>
                                                <p>Fixed interest 13 %</p>
                                            </div>
                                            <div className="single">
                                                <p>Investing from 500 €</p>
                                                <p>Fixed interest 13.25 %</p>
                                            </div>
                                            <div className="single">
                                                <p>Investing from 1500 €</p>
                                                <p>Fixed interest 13.5 %</p>
                                            </div>
                                            <div className="single">
                                                <p>Investing from 2500 €</p>
                                                <p>Fixed interest 14 %</p>
                                            </div>
                                        </div>
                                        <p className="neutral-bottom">The Interest on the Loan Amount shall be calculated from and
                                            including the date of
                                            disbursement of the Loan Amount to the Debtor's Account or to such other account (or
                                            accounts) as notified by the Debtor to the Operator in writing prior to the
                                            disbursement of the Loan Amount.</p>
                                    </div>
                                    <div className="group__one">
                                        <h4>Loan term and repayment</h4>
                                        <div className="tabular__group">
                                            <div className="single">
                                                <p>Loan Repayment</p>
                                                <p>Every Month</p>
                                            </div>
                                            <div className="single">
                                                <p>Loan Repayment postponement</p>
                                                <p>3</p>
                                            </div>
                                            <div className="single">
                                                <p>Loan Period</p>
                                                <p>24 Months</p>
                                            </div>
                                            <div className="single">
                                                <p>Minimum Loan Period</p>
                                                <p>4 Months</p>
                                            </div>
                                            <div className="single">
                                                <p>Estimated start date of the loan</p>
                                                <p>2022-01-28</p>
                                            </div>
                                            <div className="single">
                                                <p>Estimated start date of the loan</p>
                                                <p>2022-01-28</p>
                                            </div>
                                        </div>
                                        <p className="neutral-bottom">If the Debtor repays the Loan earlier than after the specified
                                            minimum loan period, it undertakes to pay interest to the Lender for the entire
                                            specified minimum period.</p>
                                    </div>
                                    <div className="group__one">
                                        <div className="map__wrapper">
                                            <Iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                                                width="746" height="312" style="border:0;" allowfullscreen="" loading="lazy"
                                                referrerpolicy="no-referrer-when-downgrade"></Iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="p__details__sidebar">
                                    <div className="intro">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest
                                            </p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <h5>Available for funding: <span>€134 514</span></h5>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has"><span className="project__has__investors">159
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,94,196</span></p>
                                                <p className="project__goal">
                                                    <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ribbon">
                                            <p>Business loan #00194</p>
                                        </div>
                                    </div>
                                    <div className="group brin">
                                        <div className="acus__content">
                                            <form action="#" method="post">
                                                <div className="input input--secondary">
                                                    <label for="anNumTwo">Annual return rate:</label>
                                                    <input type="number" name="an__num__two" id="anNumTwo" placeholder="7.00%"
                                                        required="required" />
                                                </div>
                                                <div className="input input--secondary">
                                                    <label for="anNumIn">Invest</label>
                                                    <input type="number" name="an__num_in" id="anNumIn" placeholder="€ 500"
                                                        required="required" />
                                                </div>
                                                <div className="hab">
                                                    <div className="anti">
                                                        <p>Loan Period</p>
                                                        <div className="inti">
                                                            <p>24 mo.</p>
                                                        </div>
                                                    </div>
                                                    <div className="anti">
                                                        <p>Risk</p>
                                                        <div className="inti">
                                                            <p>C (Higher)</p>
                                                        </div>
                                                    </div>
                                                    <div className="anti">
                                                        <p>Purpose Of Loan</p>
                                                        <div className="inti">
                                                            <p>Business Loan</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="collat">
                                                    <div className="single">
                                                        <p>Collateral</p>
                                                        <p>Guarantees/Surety</p>
                                                    </div>
                                                    <div className="single">
                                                        <p>Country</p>
                                                        <p><img src="assets/images/icons/flag.png" alt="flag"/> Lithunia</p>
                                                    </div>
                                                </div>
                                                <div className="suby">
                                                    <h5>500</h5>
                                                    <button type="submit" className="button button--effect">Invest Now</button>
                                                </div>
                                            </form>
                                        </div>
                                        <p className="text-center neutral-bottom">
                                            <a href="contact-us.html">Request a free callback</a>
                                        </p>
                                    </div>
                                    <div className="group brini">
                                        <h5 className="neutral-top">Investment Overview</h5>
                                        <hr />
                                        <p>Purpose of the loan To increase the company's working capital, magna a laoreet
                                            convallis, massa sapien tempor arcu, nec euismod elit justo in lacus. Maecenas
                                            mattis massa lectus, vel tincidunt augue porta non.</p>
                                        <p>Duis quis orci vehicula, fermentum tortor vitae, imperdiet sem. Quisque iaculis eu
                                            odio in lobortis. Sed vel ex non erat pellentesque lobortis vel vitae diam. Donec
                                            gravida eleifend pellentesque. Curabitur dictum blandit accumsan.</p>
                                        <a href="blog.html">Read More</a>
                                    </div>
                                    <div className="group birinit">
                                        <h6>Share via Social </h6>
                                        <div className="social text-start">
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="group alt__brin">
                                        <h5>Key Updates <i className="fa-solid fa-bell"></i></h5>
                                        <hr />
                                        <div className="singl__wrapper">
                                            <div className="singl">
                                                <img src="assets/images/check.png" alt="Check" />
                                                <div>
                                                    <p>30-Aug-2022</p>
                                                    <a href="terms-conditions.html">Term Sheet Signed</a>
                                                </div>
                                            </div>
                                            <div className="singl">
                                                <img src="assets/images/check.png" alt="Check" />
                                                <div>
                                                    <p>30-Aug-2022</p>
                                                    <a href="privacy-policy.html">Listing Live</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group alt__brin__last">
                                        <h5>Reports</h5>
                                        <hr />
                                        <h6>Investment Note</h6>
                                        <p>Property Share's Detailed Investment Note</p>
                                        <a href="javascript:void(0)" className="button">DOWNLOAD INVESTMENT NOTE <i
                                                className="fa-solid fa-download"></i></a>
                                        <h6>Legal Title Report</h6>
                                        <p>Detailed Report on the Title diligence of the
                                            property by Amarchand Mangaldas</p>
                                        <a href="javascript:void(0)" className="button">DOWNLOAD TITLE REPORT <i
                                                className="fa-solid fa-download"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #details section end ==== --> */}

            {/* <!-- ==== property gallery two section start ==== --> */}
            <section className="p__gallery wow fadeInUp" id="gallery">
                <div className="container">
                    <hr className="divider" />
                    <div className="p__gallery__area section__space">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Property Gallery</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <a href="contact-us.html" className="button button--secondary button--effect">Request
                                            info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row p__gallery__single">
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/one.png">
                                    <img src="assets/images/gallery/one.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/two.png">
                                    <img src="assets/images/gallery/two.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/three.png">
                                    <img src="assets/images/gallery/three.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/four.png">
                                    <img src="assets/images/gallery/four.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/five.png">
                                    <img src="assets/images/gallery/five.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/six.png">
                                    <img src="assets/images/gallery/six.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/seven.png">
                                    <img src="assets/images/gallery/seven.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/eight.png">
                                    <img src="assets/images/gallery/eight.png" alt="Property Image" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 gallery__single__two">
                                <a href="assets/images/gallery/nine.png">
                                    <img src="assets/images/gallery/nine.png" alt="Property Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== property gallery two section end ==== --> */}

            {/* <!-- ==== all properties in grid section start ==== --> */}
            <section className="properties__grid section__space wow fadeInUp">
                <div className="container">
                    <div className="properties__grid__area">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Browse Similar Business</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <a href="properties.html" className="button button--secondary button--effect">Browse All
                                            Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__grid__wrapper">
                            <div className="row alt__loan__row">
                                <div className="col-md-6 col-xl-4 alt__loan__grid">
                                    <div className="alt__loan__grid__single">
                                        <div className="imi__alt">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/one.png" alt="Los Angeles" />
                                                </a>
                                                <div className="ribbon">
                                                    <p>Waiting For Invest</p>
                                                </div>
                                            </div>
                                            <div className="alt__loan__content">
                                                <div className="item__head">
                                                    <div className="item__head__left">
                                                        <p>Sircue Industries</p>
                                                        <h5>
                                                            <a href="business-loan-details.html">LTD Statybų taktikos</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="progress__type progress__type--three">
                                                    <p className="collected">Collected Amount</p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i>
                                                            1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                </div>
                                                <div className="item__info">
                                                    <div className="item__info__single">
                                                        <p>Annual Return</p>
                                                        <h6>7.5% + 2%</h6>
                                                    </div>
                                                    <div className="item__info__single">
                                                        <p>Maximum Term</p>
                                                        <h6>36 Months</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="alt__loan__foot">
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest
                                                    </p>
                                                    <div className="countdown">
                                                        <h5>
                                                            <span className="days">00</span><span className="ref">d</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="hours"> 00</span><span className="ref">h</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="minutes">00</span><span className="ref">m</span>
                                                            <span className="seperator"></span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="invest__cta">
                                                    <a href="business-loan-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                    <p className="secondary">Business loan #00134</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4 alt__loan__grid">
                                    <div className="alt__loan__grid__single">
                                        <div className="imi__alt">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/two.png" alt="Los Angeles" />
                                                </a>
                                                <div className="ribbon">
                                                    <p>Waiting For Invest</p>
                                                </div>
                                            </div>
                                            <div className="alt__loan__content">
                                                <div className="item__head">
                                                    <div className="item__head__left">
                                                        <p>Infinite Electric</p>
                                                        <h5>
                                                            <a href="business-loan-details.html">LTD Orandis</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="progress__type progress__type--three">
                                                    <p className="collected">Collected Amount</p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i>
                                                            1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                </div>
                                                <div className="item__info">
                                                    <div className="item__info__single">
                                                        <p>Annual Return</p>
                                                        <h6>7.5% + 2%</h6>
                                                    </div>
                                                    <div className="item__info__single">
                                                        <p>Maximum Term</p>
                                                        <h6>36 Months</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="alt__loan__foot">
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest
                                                    </p>
                                                    <div className="countdown">
                                                        <h5>
                                                            <span className="days">00</span><span className="ref">d</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="hours"> 00</span><span className="ref">h</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="minutes">00</span><span className="ref">m</span>
                                                            <span className="seperator"></span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="invest__cta">
                                                    <a href="business-loan-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                    <p className="secondary">Business loan #00294</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4 alt__loan__grid">
                                    <div className="alt__loan__grid__single">
                                        <div className="imi__alt">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/three.png" alt="Los Angeles" />
                                                </a>
                                                <div className="ribbon">
                                                    <p>Waiting For Invest</p>
                                                </div>
                                            </div>
                                            <div className="alt__loan__content">
                                                <div className="item__head">
                                                    <div className="item__head__left">
                                                        <p>Circle Tree</p>
                                                        <h5>
                                                            <a href="business-loan-details.html">LTD Pri,ita</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="progress__type progress__type--three">
                                                    <p className="collected">Collected Amount</p>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i>
                                                            1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                </div>
                                                <div className="item__info">
                                                    <div className="item__info__single">
                                                        <p>Annual Return</p>
                                                        <h6>7.5% + 2%</h6>
                                                    </div>
                                                    <div className="item__info__single">
                                                        <p>Maximum Term</p>
                                                        <h6>36 Months</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="alt__loan__foot">
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest
                                                    </p>
                                                    <div className="countdown">
                                                        <h5>
                                                            <span className="days">00</span><span className="ref">d</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="hours"> 00</span><span className="ref">h</span>
                                                            <span className="seperator">:</span>
                                                        </h5>
                                                        <h5>
                                                            <span className="minutes">00</span><span className="ref">m</span>
                                                            <span className="seperator"></span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="invest__cta">
                                                    <a href="business-loan-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                    <p className="secondary">Business loan #00994</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #all properties in grid section end ==== --> */}

            {/* <!-- ==== market section start ==== --> */}
            <section className="market section__space over__hi">
                <div className="container">
                    <div className="market__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 col-xl-5">
                                <div className="market__thumb thumb__rtl column__space">
                                    <img src="assets/images/market-illustration.png" alt="Explore the Market" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-xl-1">
                                <div className="content">
                                    <h5 className="neutral-top">Real exposure to the real estate market</h5>
                                    <h2>You Invest. Revest
                                        Does the Rest</h2>
                                    <p>Transparent Real Estate Investing Through Revest.Join us and
                                        experience a smarter,better way to invest in real estate</p>
                                    <a href="properties.html" className="button button--effect">Start Exploring</a>
                                    <img src="assets/images/arrow.png" alt="Go to" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #market section end ==== --> */}
        </div>
    )
}

export default LoanDetails;