
const Properties = () => {
    return (
        <div>
            {/* <!-- ==== banner section start ==== --> */}
            <section className="banner__alt bg__img" data-background="./assets/images/banner/banner-two-bg.png">
                <div className="container">
                    <div className="banner__alt__area">
                        <h1 className="neutral-top neutral-bottom">Browse Properties</h1>
                    </div>
                </div>
            </section>
            {/* <!-- ==== banner section end ==== --> */}

            {/* <!-- ==== property filter start ==== --> */}
            <div className="property__filter">
                <div className="container">
                    <div className="property__filter__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12 col-xl-6">
                                <div className="property__search__wrapper">
                                    <form action="#" method="post">
                                        <div className="input">
                                            <input type="search" name="property__search" id="propertySearch"
                                                placeholder="Search for properties" />
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <button type="submit" className="button button--effect">Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3">
                                <div className="property__select__wrapper">
                                    <select className="location__select">
                                        <option data-display="Location">Select Location</option>
                                        <option value="angeles">Los Angeles</option>
                                        <option value="francis">San Francisco, CA</option>
                                        <option value="weldon">The Weldon</option>
                                        <option value="diego">San Diego</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3">
                                <div className="property__select__wrapper">
                                    <select className="property__select">
                                        <option data-display="Property">Property Type</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="residential">Residential</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==== #property filter end ==== --> */}

            {/* <!-- ==== properties grid section start ==== --> */}
            <section className="properties__filter section__space__bottom">
                <div className="container wow fadeInUp">
                    <div className="properties__filter__wrapper">
                        <h6>Showing <span>505</span> properties</h6>
                        <div className="grid__wrapper">
                            <select className="grid__select">
                                <option data-display="Sort By">Sort By</option>
                                <option value="grid">Date</option>
                                <option value="list">Price</option>
                            </select>
                            <a href="javascript:void(0)" className="grid__btn grid__view grid__btn__active">
                                <i className="fa-solid fa-grip"></i>
                            </a>
                            <a href="javascript:void(0)" className="grid__btn grid__list">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row property__grid__area__wrapper">
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/los.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>Los Angeles</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/lily.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>San Francisco, CA</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> 3335 21 St, San Francisco
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/san.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>San Diego</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> 356 La Jolla, San Diego
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                    <div className="row property__grid__area__wrapper mt-30">
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/los.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>Los Angeles</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/lily.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>The Lily</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> Colorado Springs, CO
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                        <div className="col-xl-4 col-md-6 property__grid__area__wrapper__inner">
                            <div className="property__list__wrapper property__grid">
                                <div className="row d-flex align-items-center">
                                    <div className="property__grid__area__wrapper__inner__two">
                                        <div className="property__item__image column__space--secondary">
                                            <div className="img__effect">
                                                <a href="property-details.html">
                                                    <img src="assets/images/property/weldon.png" alt="Los Angeles" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property__grid__area__wrapper__inner__three">
                                        <div className="property__item__content">
                                            <div className="item__head">
                                                <div className="item__head__left">
                                                    <h4>The Weldon</h4>
                                                    <p><i className="fa-solid fa-location-dot"></i> Gastonia, NC
                                                    </p>
                                                </div>
                                                <div className="item__head__right">
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
                                                </div>
                                            </div>
                                            <div className="progress__type progress__type--two">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="project__info">
                                                    <p className="project__has"><span className="project__has__investors">159
                                                            Investors</span> | <span className="project__has__investors__amount"><i
                                                                className="fa-solid fa-dollar-sign"></i> 1,94,196</span> <span
                                                            className="project__has__investors__percent">(64.73%)</span></p>
                                                    <p className="project__goal">
                                                        <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                                                    </p>
                                                </div>
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
                                                <div className="item__info__single">
                                                    <p>Property Type</p>
                                                    <h6>Commercial</h6>
                                                </div>
                                                <div className="item__info__single">
                                                    <p>Distribution</p>
                                                    <h6>Monthly</h6>
                                                </div>
                                            </div>
                                            <div className="item__footer">
                                                <div className="item__security">
                                                    <div className="icon__box">
                                                        <img src="assets/images/home.png" alt="Security" />
                                                    </div>
                                                    <div className="item__security__content">
                                                        <p className="secondary">Security</p>
                                                        <h6>1st-Rank Mortgage</h6>
                                                    </div>
                                                </div>
                                                <div className="item__cta__group">
                                                    <a href="registration.html" className="button button--effect">Invest Now</a>
                                                    <a href="property-details.html"
                                                        className="button button--secondary button--effect">Details</a>
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
                    <div className="cta__btn">
                        <a href="property-details.html" className="button button--effect">Load More</a>
                    </div>
                </div>
            </section>
            {/* <!-- ==== properties grid section end ==== --> */}
        </div>
    )
}

export default Properties;