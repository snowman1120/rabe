
const BusinessLoan = () => {
    return (
        <div>
            {/* <!-- ==== banner section start ==== --> */}
            <section className="banner__alt bg__img" data-background="./assets/images/banner/banner-two-bg.png">
                <div className="container">
                    <div className="banner__alt__area neut">
                        <h5 className="neutral-top">Invest in loans and let your money GROW!</h5>
                        <h1 className="neutral-top neutral-bottom">Invest in Business Loans</h1>
                    </div>
                </div>
            </section>
            {/* <!-- ==== banner section end ==== --> */}

            {/* <!-- ==== property filter start ==== --> */}
            <div className="property__filter property__filter__two">
                <div className="container">
                    <div className="property__filter__area">
                        <div className="row d-flex align-items-end">
                            <div className="col-lg-12 col-xl-6 col-xxl-4">
                                <div className="property__search__wrapper">
                                    <p className="neutral-top">The name of the loan:</p>
                                    <form action="#" method="post">
                                        <div className="input">
                                            <input type="search" name="property__search" id="propertySearch"
                                                placeholder="Search for properties" />
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-xxl-3">
                                <div className="property__select__wrapper">
                                    <p className="neutral-top">Loan Status</p>
                                    <select className="location__select">
                                        <option data-display="Waiting for Investments">Waiting for Investments</option>
                                        <option value="com">Completed</option>
                                        <option value="pro">In Progress</option>
                                        <option value="sub">Submitted</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-xxl-3">
                                <div className="property__select__wrapper">
                                    <p className="neutral-top">Rish Class:</p>
                                    <select className="property__select">
                                        <option data-display="All">All</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="residential">Residential</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-xxl-2">
                                <button type="submit" className="button button--effect">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==== #property filter end ==== --> */}

            {/* <!-- ==== properties grid section start ==== --> */}
            <section className="alt__loan section__space__bottom">
                <div className="container">
                    <div className="alt__loan__area wow fadeInUp">
                        <div className="properties__filter__wrapper">
                            <h6>Showing <span>505</span> Business Loans</h6>
                            <div className="grid__wrapper">
                                <select className="grid__select">
                                    <option data-display="Sort By">Sort By</option>
                                    <option value="grid">Date</option>
                                    <option value="list">Price</option>
                                </select>
                                <a href="javascript:void(0)" className="grid__btnn grid__vieww grid__btnn__active">
                                    <i className="fa-solid fa-grip"></i>
                                </a>
                                <a href="javascript:void(0)" className="grid__btnn grid__listt">
                                    <i className="fa-solid fa-bars"></i>
                                </a>
                            </div>
                        </div>
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
                                                    <p>Elegant Industries</p>
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
                                                <p className="project__has"><span className="project__has__investors">19
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        6,94,196</span> <span
                                                        className="project__has__investors__percent">(35.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 2%</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Maximum Term</p>
                                                    <h6>12 Months</h6>
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
                                                    <p>Tagline Industries</p>
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
                                                <p className="project__has"><span className="project__has__investors">59
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        1,04,196</span> <span
                                                        className="project__has__investors__percent">(94.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>9.5% + 12%</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Maximum Term</p>
                                                    <h6>48 Months</h6>
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
                                                <p className="secondary">Business loan #00199</p>
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
                                                <p className="project__has"><span className="project__has__investors">99
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        2,94,196</span> <span
                                                        className="project__has__investors__percent">(14.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>1.5% + 1%</h6>
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
                                                <p className="secondary">Business loan #00198</p>
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
                                                <img src="assets/images/property/four.png" alt="Los Angeles" />
                                            </a>
                                            <div className="ribbon">
                                                <p>Waiting For Invest</p>
                                            </div>
                                        </div>
                                        <div className="alt__loan__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <p>Innovations</p>
                                                    <h5>
                                                        <a href="business-loan-details.html">LTD UAB ARGO Energija</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--three">
                                                <p className="collected">Collected Amount</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">59
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        1,04,196</span> <span
                                                        className="project__has__investors__percent">(84.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>0.5% + 2%</h6>
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
                                                <p className="secondary">Business loan #00594</p>
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
                                                <img src="assets/images/property/five.png" alt="Los Angeles" />
                                            </a>
                                            <div className="ribbon">
                                                <p>Waiting For Invest</p>
                                            </div>
                                        </div>
                                        <div className="alt__loan__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <p>Rise Up</p>
                                                    <h5>
                                                        <a href="business-loan-details.html">UAB Baltic Sun Projects</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--three">
                                                <p className="collected">Collected Amount</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">19
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        8,94,196</span> <span
                                                        className="project__has__investors__percent">(54.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>5.5% + 2%</h6>
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
                                                <p className="secondary">Business loan #00694</p>
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
                                                <img src="assets/images/property/six.png" alt="Los Angeles" />
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
                                                        <a href="business-loan-details.html">LTD verslo Valstija</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--three">
                                                <p className="collected">Collected Amount</p>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">59
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i>
                                                        2,14,196</span> <span
                                                        className="project__has__investors__percent">(24.73%)</span></p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>3.5% + 2%</h6>
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
                                                <p className="secondary">Business loan #00394</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta__btn">
                        <a href="property-details.html" className="button button--effect">Load More</a>
                    </div>
                </div>
            </section>
            {/* <!-- ==== properties grid section end ==== --> */}
        </div>
    )
}

export default BusinessLoan;