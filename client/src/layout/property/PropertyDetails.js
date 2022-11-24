import Iframe from 'react-iframe';

const PropertyDetails = () => {
    return (
        <div>
            {/* <!-- ==== details section start ==== --> */}
            <div className="property__details__banner bg__img clear__top"
                data-background="./assets/images/banner/property-details-banner.png">
            </div>
            <section className="p__details faq section__space__bottom">
                <div className="container">
                    <div className="p__details__area">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p__details__content">
                                    <a href="#gallery" className="button button--effect button--secondary"><i
                                            className="fa-solid fa-images"></i> Browse Gallery</a>
                                    <div className="intro">
                                        <h3>Los Angeles</h3>
                                        <p><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles
                                        </p>
                                    </div>
                                    <div className="group__one">
                                        <h4>Project Description</h4>
                                        <p>The “Revest“ team is introducing a new buy to let investment opportunity: A19,
                                            Vilnius I. The invest ment offer consists of administrative premises, which are
                                            currently being converted into studio apartments/lofts. In this way, the aim is to
                                            increase the rental income of this real estate project.</p>
                                    </div>
                                    <div className="group__two">
                                        <h5>Reasons to invest in the project A19, Vilnius:</h5>
                                        <ul>
                                            <li><img src="assets/images/check.png" alt="Check" /> Lofts in an attractive area -
                                                in the center of Vilnius;</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> ixed, attractive annual rental
                                                income;</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> The fixed interest is indexed
                                                to inflation;</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> The fixed interest is indexed
                                                to inflation;</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> Variable capital gains;</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> The premises were appraised by
                                                an independent valuer at 347 000 EUR</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> The project owner is an
                                                experienced real estate administrator.</li>
                                        </ul>
                                    </div>
                                    <div className="terms">
                                        <h5>Financial terms of the investment:</h5>
                                        <div className="terms__wrapper">
                                            <div className="terms__single">
                                                <img src="assets/images/icons/loan.png" alt="Maximum Loan" />
                                                <p>Maximum loan term</p>
                                                <h5 className="neutral-bottom">36 Months</h5>
                                            </div>
                                            <div className="terms__single">
                                                <img src="assets/images/icons/charge.png" alt="Charge" />
                                                <p>Security</p>
                                                <h5 className="neutral-bottom">1st charge
                                                    Mortgage</h5>
                                            </div>
                                            <div className="terms__single">
                                                <img src="assets/images/icons/project.png" alt="Annual" />
                                                <p>Annual Return</p>
                                                <h5 className="neutral-bottom">7%</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group__two">
                                        <h5>When investing:</h5>
                                        <ul>
                                            <li><img src="assets/images/check.png" alt="Check" /> Up to 4999 € - the annual
                                                return is 7%.</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> 5000 € – 14999 € - the annual
                                                return is 7.1%.</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> 15000 € – 29999 € - the annual
                                                return is 7.2%.</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> 30000 € – 49999 € - the annual
                                                return is 7.35%.</li>
                                            <li><img src="assets/images/check.png" alt="Check" /> 50000 € and more - the annual
                                                return is 7.5%.</li>
                                        </ul>
                                    </div>
                                    <div className="terms">
                                        <h5>The capital growth distribution:</h5>
                                        <div className="terms__wrapper">
                                            <div className="terms__single">
                                                <img src="assets/images/icons/investor.png" alt="Maximum Loan" />
                                                <p>Investors</p>
                                                <h5 className="neutral-bottom">40% - 60%</h5>
                                            </div>
                                            <div className="terms__single">
                                                <img src="assets/images/icons/project.png" alt="Charge" />
                                                <p>Project</p>
                                                <h5 className="neutral-bottom">40%</h5>
                                            </div>
                                            <div className="terms__single">
                                                <img src="assets/images/icons/revest.png" alt="Annual" />
                                                <p>Revest</p>
                                                <h5 className="neutral-bottom">Up to 20%</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owner">
                                        <img src="assets/images/owner.png" alt="Owner" />
                                        <div>
                                            <h5>The project owner (borrower)</h5>
                                            <p>MB „Rego Properties“ - is a company serving as a special vehicle for revest
                                                investments. The CEO of the company - Andrius Rimdeika is a former investment
                                                banker, who has worked in investment firms such as ”Morgan Stanley” and “Prime
                                                investment”.</p>
                                        </div>
                                    </div>
                                    <div className="faq__group">
                                        <h5 className="atr">Frequently asked questions</h5>
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
                                                        <p>combined with a handful of model sentence structures, to generate
                                                            Lorem Ipsum
                                                            which looks reasonable. The generated Lorem Ipsum is therefore
                                                            always free
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
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFundTwo"
                                                        aria-expanded="false" aria-controls="collapseFundTwo">
                                                        What are the benefits of investing via Revest?
                                                    </button>
                                                </h5>
                                                <div id="collapseFundTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFundTwo" data-bs-parent="#accordionExampleFund">
                                                    <div className="accordion-body">
                                                        <p>combined with a handful of model sentence structures, to generate
                                                            Lorem Ipsum
                                                            which looks reasonable. The generated Lorem Ipsum is therefore
                                                            always free
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
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFundThree"
                                                        aria-expanded="false" aria-controls="collapseFundThree">
                                                        What makes Revest different?
                                                    </button>
                                                </h5>
                                                <div id="collapseFundThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFundThree" data-bs-parent="#accordionExampleFund">
                                                    <div className="accordion-body">
                                                        <p>combined with a handful of model sentence structures, to generate
                                                            Lorem Ipsum
                                                            which looks reasonable. The generated Lorem Ipsum is therefore
                                                            always free
                                                            from
                                                            repetition, injected humour, or</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group__one">
                                        <h4>Key investment risks:</h4>
                                        <p>Risk of falling prices: The price of the property might fall due to the increase in
                                            supply or decrease in demand in the area or other economic factors.Liquidity risk:
                                            The borrower might be unable to find a buyer in order to sell the property.Tenant
                                            risk: There is a risk that the asset can lose a tenant and it can take time to find
                                            replacements, which can have impact on the property's cash-flow.</p>
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
                                    </div>
                                    <div className="group brin">
                                        <h5 className="neutral-top">Occupancy</h5>
                                        <div className="acus__btns">
                                            <a href="javascript:void(0)" className="acus__btn acus__btn__active">0%</a>
                                            <a href="javascript:void(0)" className="acus__btn">20%</a>
                                            <a href="javascript:void(0)" className="acus__btn">40%</a>
                                            <a href="javascript:void(0)" className="acus__btn">60%</a>
                                            <a href="javascript:void(0)" className="acus__btn">80%</a>
                                            <a href="javascript:void(0)" className="acus__btn">100%</a>
                                        </div>
                                        <div className="acus__content">
                                            <form action="#" method="post">
                                                <div className="input input--secondary">
                                                    <label for="anNum">Annual return rate:</label>
                                                    <input type="number" name="an__num" id="anNum" placeholder="7.00%"
                                                        required="required" />
                                                </div>
                                                <div className="input input--secondary">
                                                    <label for="anNumIn">Invest</label>
                                                    <input type="number" name="an__num_in" id="anNumIn" placeholder="€ 500"
                                                        required="required" />
                                                </div>
                                                <div className="input input--secondary">
                                                    <label for="anNumInTwo">Earn</label>
                                                    <input type="number" name="an__num_in_two" id="anNumInTwo"
                                                        placeholder="€ 35.00" required="required" />
                                                </div>
                                                <div className="capital">
                                                    <p>Capital Growth Split:</p>
                                                    <h5>40% <a href="blog.html"><i className="fa-solid fa-circle-info"></i></a>
                                                    </h5>
                                                </div>
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
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
            <section className="properties__grid section__space">
                <div className="container">
                    <div className="properties__grid__area wow fadeInUp">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Browse Similar Properties</h2>
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
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="property__grid__single column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details.html">
                                                <img src="assets/images/property/grid-one.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>Los Angeles</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los
                                                Angeles</p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">159
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 2%</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                            </div>
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
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
                                                    <a href="property-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="property__grid__single column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details.html">
                                                <img src="assets/images/property/grid-two.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>San Francisco, CA</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 3335 21 St, San
                                                Francisco</p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">159
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 2%</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                            </div>
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
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
                                                    <a href="property-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details.html">
                                                <img src="assets/images/property/grid-three.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>San Diego</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 356 La Jolla, San
                                                Diego</p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">159
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 2%</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                            </div>
                                            <div className="invest__cta__wrapper">
                                                <div className="countdown__wrapper">
                                                    <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
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
                                                    <a href="property-details.html" className="button button--effect">
                                                        Invest Now
                                                    </a>
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

export default PropertyDetails;