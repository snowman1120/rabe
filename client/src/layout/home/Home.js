
const Main = () => {
    return (
        <div>
            {/* <!-- ==== hero section start ==== --> */}
            <section className="hero pos__rel over__hi bg__img" data-background="./assets/images/hero/light-bg.png">
                <div className="container">
                    <div className="hero__area">
                        <div className="row">
                            <div className="col-lg-6 col-xxl-5">
                                <div className="hero__content">
                                    <h5 className="neutral-top">A smarter, better way to invest</h5>
                                    <h1>Real Estate Investment For <span>Everyone</span> </h1>
                                    <p className="primary neutral-bottom">
                                        Buy shares of rental properties, earn monthly income, and watch your money grow
                                    </p>
                                    <div className="hero__cta__group">
                                        <a href="properties" className="button button--effect">Start Exploring</a>
                                        <a href="business-loan" className="button button--secondary button--effect">Get
                                            Funding</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-6 offset-xxl-1">
                                <div className="hero__illustration d-none d-lg-block">
                                    <img src="assets/images/hero/hero-illustration.png" alt="Hero Illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #hero section end ==== --> */}

            {/* <!-- ==== property filter start ==== --> */}
            <div className="property__filter">
                <div className="container">
                    <div className="property__filter__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12 col-xl-6">
                                <div className="property__search__wrapper">
                                    <div className='search-form'>
                                        <div className="input">
                                            <input type="search" name="property__search" id="propertySearch"
                                                placeholder="Search for properties" />
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <button type="submit" className="button button--effect">Search</button>
                                    </div>
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

            {/* <!-- ==== featured properties section start ==== --> */}
            <section className="featured__properties section__space">
                <div className="container">
                    <div className="featured__properties__area wow fadeInUp">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Featured Properties</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <a href="properties" className="button button--secondary button--effect">Browse All
                                            Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__list__wrapper">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-5">
                                    <div className="property__item__image column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/los.png" alt="Los Angeles" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="property__item__content">
                                        <div className="item__head">
                                            <div className="item__head__left">
                                                <h4>Los Angeles</h4>
                                                <p><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles</p>
                                            </div>
                                            <div className="item__head__right">
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
                                            </div>
                                        </div>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has"><span className="project__has__investors">119
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 4,94,196</span> <span
                                                        className="project__has__investors__percent">(54.73%)</span></p>
                                                <p className="project__goal">
                                                    <i className="fa-solid fa-dollar-sign"></i> 1,00,000 Goal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__info__single">
                                                <p>Annual Return</p>
                                                <h6>7.5% + 3%</h6>
                                            </div>
                                            <div className="item__info__single">
                                                <p>Maximum Term</p>
                                                <h6>26 Months</h6>
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
                                                <a href="registration" className="button button--effect">Invest Now</a>
                                                <a href="property-details"
                                                    className="button button--secondary button--effect">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__list__wrapper">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5">
                                    <div className="property__item__image column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/san.png" alt="San Francisco" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="property__item__content">
                                        <div className="item__head">
                                            <div className="item__head__left">
                                                <h4>San Francisco, CA</h4>
                                                <p><i className="fa-solid fa-location-dot"></i> 3335 21 St, San Francisco</p>
                                            </div>
                                            <div className="item__head__right">
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
                                            </div>
                                        </div>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has"><span className="project__has__investors">179
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,64,296</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span></p>
                                                <p className="project__goal">
                                                    <i className="fa-solid fa-dollar-sign"></i> 5,00,000 Goal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__info__single">
                                                <p>Annual Return</p>
                                                <h6>3.5% + 6%</h6>
                                            </div>
                                            <div className="item__info__single">
                                                <p>Maximum Term</p>
                                                <h6>48 Months</h6>
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
                                                <a href="registration" className="button button--effect">Invest Now</a>
                                                <a href="property-details"
                                                    className="button button--secondary button--effect">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__list__wrapper">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5">
                                    <div className="property__item__image column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/weldon.png" alt="The Weldon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="property__item__content">
                                        <div className="item__head">
                                            <div className="item__head__left">
                                                <h4>The Weldon</h4>
                                                <p><i className="fa-solid fa-location-dot"></i> Gastonia, NC</p>
                                            </div>
                                            <div className="item__head__right">
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
                                            </div>
                                        </div>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has"><span className="project__has__investors">579
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 4,64,196</span> <span
                                                        className="project__has__investors__percent">(74.33%)</span></p>
                                                <p className="project__goal">
                                                    <i className="fa-solid fa-dollar-sign"></i> 2,00,000 Goal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__info__single">
                                                <p>Annual Return</p>
                                                <h6>2.5% + 2%</h6>
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
                                                <a href="registration" className="button button--effect">Invest Now</a>
                                                <a href="property-details"
                                                    className="button button--secondary button--effect">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__list__wrapper">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5">
                                    <div className="property__item__image column__space--secondary">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/lily.png" alt="The Lily" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="property__item__content">
                                        <div className="item__head">
                                            <div className="item__head__left">
                                                <h4>The Lily</h4>
                                                <p><i className="fa-solid fa-location-dot"></i> Colorado Springs, CO</p>
                                            </div>
                                            <div className="item__head__right">
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
                                            </div>
                                        </div>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has"><span className="project__has__investors">359
                                                        Investors</span> | <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,14,196</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span></p>
                                                <p className="project__goal">
                                                    <i className="fa-solid fa-dollar-sign"></i> 5,00,000 Goal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__info__single">
                                                <p>Annual Return</p>
                                                <h6>7.5% + 3%</h6>
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
                                                <a href="registration" className="button button--effect">Invest Now</a>
                                                <a href="property-details"
                                                    className="button button--secondary button--effect">Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #featured properties section end ==== --> */}

            {/* <!-- ==== all properties in grid section start ==== --> */}
            <section className="properties__grid section__space">
                <div className="container">
                    <div className="properties__grid__area wow fadeInUp">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>All Properties</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <a href="properties" className="button button--secondary button--effect">Browse All
                                            Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__grid__wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
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
                                                <p className="project__has"><span className="project__has__investors">17
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 7,94,196</span> <span
                                                        className="project__has__investors__percent">(14.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>2.5% + 4%</h6>
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
                                                    <a href="property-details" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
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
                                                <p className="project__has"><span className="project__has__investors">179
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 2,94,196</span> <span
                                                        className="project__has__investors__percent">(54.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>5.5% + 4%</h6>
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
                                                    <a href="property-details" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
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
                                                <p className="project__has"><span className="project__has__investors">199
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 8,94,196</span> <span
                                                        className="project__has__investors__percent">(64.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>3.5% + 2%</h6>
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
                                                    <a href="property-details" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property__grid__wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/grid-four.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>San Diego</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 90071, Grand
                                                Avenue, San Diego</p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">59
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 8,94,196</span> <span
                                                        className="project__has__investors__percent">(54.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 9%</h6>
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
                                                    <a href="property-details" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/grid-five.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>The Lily</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> Colorado Springs, CO
                                            </p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">559
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 9,94,196</span> <span
                                                        className="project__has__investors__percent">(84.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>7.5% + 5%</h6>
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
                                                    <a href="property-details" className="button button--effect">
                                                        Invest Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4">
                                    <div className="property__grid__single">
                                        <div className="img__effect">
                                            <a href="property-details">
                                                <img src="assets/images/property/grid-six.jpg" alt="Property" />
                                            </a>
                                        </div>
                                        <div className="property__grid__single__inner">
                                            <h4>The Weldon</h4>
                                            <p className="sub__info"><i className="fa-solid fa-location-dot"></i> Gastonia, NC</p>
                                            <div className="progress__type">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p className="project__has"><span className="project__has__investors">139
                                                        Investors</span> |
                                                    <span className="project__has__investors__amount"><i
                                                            className="fa-solid fa-dollar-sign"></i> 1,14,196</span> <span
                                                        className="project__has__investors__percent">(44.73%)</span>
                                                </p>
                                            </div>
                                            <div className="item__info">
                                                <div className="item__info__single">
                                                    <p>Annual Return</p>
                                                    <h6>5.5% + 2%</h6>
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
                                                    <a href="property-details" className="button button--effect">
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

            {/* <!-- ==== profit overview section start ==== --> */}
            <section className="profit section__space">
                <div className="container">
                    <div className="profit__area wow fadeInUp">
                        <div className="section__header">
                            <h5 className="neutral-top">Built to help smart investors invest smarter</h5>
                            <h2>We handle the heavy lifting so you
                                can sit back, relax, and profit.</h2>
                            <p className="neutral-bottom">We make institutional quality real estate accessible to investors, in a
                                simple
                                and transparent way.</p>
                        </div>
                        <div className="profit__item__wrapper">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="profit__single__item alt shadow__effect">
                                        <div className="img__box">
                                            <img src="assets/images/overview/passive-income.png" alt="Passive Income" />
                                        </div>
                                        <div className="item__content">
                                            <h4>Passive Income</h4>
                                            <p>Earn rental income and receive deposits quarterly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profit__single__item shadow__effect">
                                        <div className="img__box">
                                            <img src="assets/images/overview/secure.png" alt="secure" />
                                        </div>
                                        <div className="item__content">
                                            <h4>Secure & Cost-efficient</h4>
                                            <p>Digital security is legally compliant and tangible for qualified investors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profit__item__wrapper">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="profit__single__item alt shadow__effect">
                                        <div className="img__box">
                                            <img src="assets/images/overview/transparency.png" alt="Transparency" />
                                        </div>
                                        <div className="item__content">
                                            <h4>Transparency</h4>
                                            <p>Easily consult the full documentation for each property.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profit__single__item shadow__effect">
                                        <div className="img__box">
                                            <img src="assets/images/overview/support.png" alt="Support" />
                                        </div>
                                        <div className="item__content">
                                            <h4>Support</h4>
                                            <p>Earn rental income and receive deposits quarterly</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #profit overview section end ==== --> */}

            {/* <!-- ==== start step section start ==== --> */}
            <section className="start section__space__top bg__img" data-background="./assets/images/step/start-bg.png">
                <div className="container">
                    <div className="start__area wow fadeInUp">
                        <div className="section__header">
                            <h5 className="neutral-top">We're changing the way you invest.</h5>
                            <h2>It's Easy to Get Started.</h2>
                            <p className="neutral-bottom">Signing up with Revest is simple and only takes a few minutes. We can
                                automatically connect with more than 3,500 banks, so no complicated paperwork is required to
                                fund your account.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="start__single__item column__space--secondary">
                                    <div className="img__box">
                                        <img src="assets/images/step/browse.png" alt="Browse Properties" />
                                        <div className="step__count">
                                            <h4>01</h4>
                                        </div>
                                    </div>
                                    <h4>Browse Properties</h4>
                                    <p className="neutral-bottom">Select a property that fits your goal from our huge variety of
                                        hand-picked properties.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="start__single__item column__space--secondary">
                                    <div className="img__box arrow__container">
                                        <img src="assets/images/step/invest.png" alt="View Details & Invest" />
                                        <div className="step__count">
                                            <h4>02</h4>
                                        </div>
                                    </div>
                                    <h4>View Details & Invest</h4>
                                    <p className="neutral-bottom">View detailed metrics for that property like Rental Yield, etc.
                                        and invest like institutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="start__single__item">
                                    <div className="img__box">
                                        <img src="assets/images/step/earn.png" alt="Earn and Track" />
                                        <div className="step__count">
                                            <h4>03</h4>
                                        </div>
                                    </div>
                                    <h4>Earn and Track</h4>
                                    <p className="neutral-bottom">You have full visibility into the performance of your investment.
                                        Track your total current.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #start step section end ==== --> */}

            {/* <!-- ==== video popup section start ==== --> */}
            <div className="video">
                <div className="container">
                    <div className="video__area">
                        <img src="assets/images/video-illustration.png" alt="Video Illustration" />
                        <div className="video__btn">
                            <a className="video__popup" href="https://www.youtube.com/watch?v=LCihLrSehCo" target="_blank"
                                title="YouTube video player" rel="noreferrer">
                                <i className="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==== #video popup section end ==== --> */}

            {/* <!-- ==== numbers section start ==== --> */}
            <section className="numbers section__space bg__img" data-background="./assets/images/globe.png">
                <div className="container">
                    <div className="numbers__area wow fadeInUp">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="content column__space">
                                    <h5 className="neutral-top">With Revest anyone can invest!</h5>
                                    <h2>Numbers Said
                                        More Than Words</h2>
                                    <p>our low minimums give you the flexibility to invest the right amount, at the right time,
                                        to meet your goals.</p>
                                    <a href="properties" className="button button--effect">Start Exploring</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row d-flex align-items-start align-items-lg-center">
                                    <div className="col-sm-6">
                                        <div className="numbers__single shadow__effect">
                                            <img src="assets/images/platforms.png" alt="platform" />
                                            <h3><span className="counter">3000</span>+</h3>
                                            <p className="neutral-bottom">Investors Using Platform</p>
                                        </div>
                                        <div className="numbers__single shadow__effect__secondary">
                                            <img src="assets/images/returns.png" alt="Returns" />
                                            <h3><span className="counter">18</span>%</h3>
                                            <p className="neutral-bottom">Returns upto</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="numbers__single alt shadow__effect__secondary">
                                            <img src="assets/images/experience.png" alt="Experience" />
                                            <h3 className="counter">45</h3>
                                            <p className="neutral-bottom">Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #numbers section end ==== --> */}

            {/* <!-- ==== testimonial section start ==== --> */}
            <section className="testimonial section__space pos__rel over__hi bg__img"
                data-background="./assets/images/testimonial/dot-map.png">
                <div className="container">
                    <div className="testimonial__area">
                        <div className="section__header">
                            <h5 className="neutral-top">Investors Trust Us</h5>
                            <h2>Trusted by Over 40,000 Worldwide
                                Customer since 2022</h2>
                            <p className="neutral-bottom">We divide each property into shares so anyone can get started. Kindly
                                check
                                out our Investors say about revest.</p>
                        </div>
                        <div className="testimonial__item__wrapper">
                            <div className="testimonial__support">
                                <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                                    <div className="testimonial__author__ratings">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe
                                        investment with monthly payouts. Really recommended!</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__info">
                                            <div className="avatar__wrapper">
                                                <img src="assets/images/testimonial/avatar.png" alt="Allan Murphy" />
                                            </div>
                                            <div>
                                                <h5>Allan Murphy</h5>
                                                <p className="neutral-bottom">United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__support">
                                <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                                    <div className="testimonial__author__ratings">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe
                                        investment with monthly payouts. Really recommended!</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__info">
                                            <div className="avatar__wrapper">
                                                <img src="assets/images/testimonial/avatar.png" alt="Allan Murphy" />
                                            </div>
                                            <div>
                                                <h5>Allan Murphy</h5>
                                                <p className="neutral-bottom">United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__support">
                                <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                                    <div className="testimonial__author__ratings">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe
                                        investment with monthly payouts. Really recommended!</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__info">
                                            <div className="avatar__wrapper">
                                                <img src="assets/images/testimonial/avatar.png" alt="Allan Murphy" />
                                            </div>
                                            <div>
                                                <h5>Allan Murphy</h5>
                                                <p className="neutral-bottom">United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__support">
                                <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                                    <div className="testimonial__author__ratings">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe
                                        investment with monthly payouts. Really recommended!</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__info">
                                            <div className="avatar__wrapper">
                                                <img src="assets/images/testimonial/avatar.png" alt="Allan Murphy" />
                                            </div>
                                            <div>
                                                <h5>Allan Murphy</h5>
                                                <p className="neutral-bottom">United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__support">
                                <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                                    <div className="testimonial__author__ratings">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe
                                        investment with monthly payouts. Really recommended!</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__info">
                                            <div className="avatar__wrapper">
                                                <img src="assets/images/testimonial/avatar.png" alt="Allan Murphy" />
                                            </div>
                                            <div>
                                                <h5>Allan Murphy</h5>
                                                <p className="neutral-bottom">United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #testimonial section end ==== --> */}

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
                                    <a href="properties" className="button button--effect">Start Exploring</a>
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

export default Main;