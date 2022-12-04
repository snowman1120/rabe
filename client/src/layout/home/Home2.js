import {useState, useEffect} from 'react';

const Home2 = () => {
    return (
        <div>
            {/* <!-- ==== hero section start ==== --> */}
            <section className="hero hero--two pos__rel over__hi bg__img" data-background="./assets/images/hero/hero-two-bg.png">
                <div className="container">
                    <div className="hero__area">
                        <div className="row">
                            <div className="col-lg-7 col-xxl-6">
                                <div className="hero__content">
                                    <h5 className="neutral-top">Smart. Simple. Accessible.</h5>
                                    <h1>Investing
                                        Made <span>Simple</span> &
                                        <span>Transparent</span>
                                    </h1>
                                    <p className="primary neutral-bottom">
                                        Start growing your passive income today. Invest from as low as 100 EUR in real estate
                                        opportunities worldwide.
                                    </p>
                                    <div className="hero__cta__group">
                                        <a href="properties.html" className="button button--effect">Start Exploring</a>
                                        <a href="business-loan.html" className="button button--secondary button--effect">Get
                                            Funding</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xxl-6">
                                <div className="hero__illustration d-none d-lg-block">
                                    <img src="assets/images/hero/hero-two-illustration.png" alt="Hero Illustration" />
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

            {/* <!-- ==== cities slider section start ==== --> */}
            <section className="cities section__space">
                <div className="container">
                    <div className="cities__area">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Explore By <span>Cities</span></h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="custom__slide__btn">
                                        <a href="#!" className="button button--effect prev"><i
                                                className="fa-solid fa-arrow-left-long"></i></a>
                                        <a href="#!" className="button button--effect next"><i
                                                className="fa-solid fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cities__item__wrapper">
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/san.png" alt="San Diego" />
                                </div>
                                <div>
                                    <h5>San Diego</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/francisco.png" alt="San Francisco" />
                                </div>
                                <div>
                                    <h5>San Francisco</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/weldon.png" alt="The Weldon" />
                                </div>
                                <div>
                                    <h5>The Weldon</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/san.png" alt="San Diego" />
                                </div>
                                <div>
                                    <h5>San Diego</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/francisco.png" alt="San Francisco" />
                                </div>
                                <div>
                                    <h5>San Francisco</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/weldon.png" alt="The Weldon" />
                                </div>
                                <div>
                                    <h5>The Weldon</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/san.png" alt="San Diego" />
                                </div>
                                <div>
                                    <h5>San Diego</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/francisco.png" alt="San Francisco" />
                                </div>
                                <div>
                                    <h5>San Francisco</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="cities__single__item">
                                <div className="img__box">
                                    <img src="assets/images/icons/weldon.png" alt="The Weldon" />
                                </div>
                                <div>
                                    <h5>The Weldon</h5>
                                    <p>201+ Properties</p>
                                    <a href="properties.html" className="button button--secondary button--effect">Explore <i
                                            className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #cities slider section end ==== --> */}

            {/* <!-- ==== all properties in grid section start ==== --> */}
            <section className="properties__grid section__space">
                <div className="container">
                    <div className="properties__grid__area wow fadeInUp">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Featured <span>Properties</span></h2>
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
                                <div className="col-lg-6 col-xl-4">
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
                                <div className="col-lg-6 col-xl-4">
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
                                <div className="col-lg-6 col-xl-4">
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

            {/* <!-- ==== start step section start ==== --> */}
            <section className="start start--two section__space__top">
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

            {/* <!-- ==== market section start ==== --> */}
            <section className="market market--two section__space__bottom">
                <div className="container">
                    <div className="market__area market__area--two section__space bg__img"
                        data-background="./assets/images/light-two.png">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
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
                        <img src="assets/images/market-two-illustration.png" alt="Explore the Market"
                            className="d-none d-lg-block market__two__thumb" />
                    </div>
                    <div className="market__features">
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="market__features__single shadow__effect__secondary">
                                    <img src="assets/images/icons/gain.png" alt="Gain Instant" />
                                    <h4>Gain Instant</h4>
                                    <p className="neutral-bottom">Revest performs deep due diligence on sponsors, giving investors
                                        peace of mind.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="market__features__single market__features__single--alt shadow__effect">
                                    <img src="assets/images/icons/noticed.png" alt="Get noticed" />
                                    <h4>Get Noticed</h4>
                                    <p className="neutral-bottom">REVEST VERIFIED sponsor profiles are available to accredited real
                                        estate investment
                                        investors.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="market__features__single alt shadow__effect__secondary">
                                    <img src="assets/images/icons/focus.png" alt="Focus on Deals" />
                                    <h4>Focus on Deals</h4>
                                    <p className="neutral-bottom">Spend less time smiling, reaserching and dialing and more time
                                        doing what you love.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- ==== #market section end ==== --> */}

            {/* <!-- ==== platform section start ==== --> */}
            <section className="platform section__space pos__rel over__hi">
                <div className="container">
                    <div className="platform__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h5>We're Changing The Way You Invest</h5>
                                    <h2>The Convenience
                                        You’d Expect from a
                                        Modern Investment
                                        Platform</h2>
                                    <p>Invest and manage your portfolio through our easy-to-use website and mobile app. Track
                                        your performance and watch as properties across the country are acquired, improved, and
                                        operated via dynamic asset updates.</p>
                                    <a href="properties.html" className="button button--effect">Start Exploring</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="platform__thumb thumb__ltr d-none d-lg-block">
                                    <img src="assets/images/overview/platform-illustration.png" alt="Platform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #platform section end ==== --> */}

            {/* <!-- ==== portfolio section start ==== --> */}
            <div className="portfolio__overview__wrapper">
                <div className="container">
                    <div className="portfolio__overview">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio__overview__single column__space">
                                    <img src="assets/images/icons/investors.png" alt="Investors" />
                                    <div>
                                        <h2 className="counterTwo">6738</h2>
                                        <p>Investors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio__overview__single column__space">
                                    <img src="assets/images/icons/completed.png" alt="completed" />
                                    <div>
                                        <h2 className="counterTwo">61316</h2>
                                        <p>Investments Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="portfolio__overview__single">
                                    <img src="assets/images/icons/annual-return.png" alt="Average Annual Return" />
                                    <div>
                                        <h2><span className="counterTwo">10.36</span>%</h2>
                                        <p>Average Annual Return</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="portfolio section__space bg__img over__hi" data-background="./assets/images/portfolio-bg.png">
                <div className="container">
                    <div className="portfolio__area">
                        <div className="portfolio__inner section__space__top">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    <div className="content column__space">
                                        <h5 className="neutral-top">Build a global real estate portfolio.</h5>
                                        <h2>Real Estate Investing
                                            For Everybody.</h2>
                                        <p>Investing with Revest, is similar to owning a rental property, however with us you
                                            don't have to worry about day-to-day property management and in the periods of
                                            vacancy the borrower is required to distribute fixed-interest payments.</p>
                                        <div className="port__cta__group">
                                            <a href="properties.html" className="button button--effect">Start Exploring</a>
                                            <a href="https://www.youtube.com/watch?v=LCihLrSehCo" target="_blank"
                                                className="button button--secondary button--effect video__popup"><i
                                                    className="fa-solid fa-play"></i>
                                                How It Works</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="port__thumb thumb__ltr">
                                        <img src="assets/images/tower.png" alt="Tower" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #portfolio section end ==== --> */}

            {/* <!-- ==== why invest section start ==== --> */}
            <section className="why__invest section__space">
                <div className="container">
                    <div className="why__invest__area wow fadeInUp">
                        <div className="row d-flex align-items-center">
                            <div className="col-xxl-6">
                                <div className="content column__space--secondary">
                                    <h5 className="neutral-top">Join the future of real estate investing</h5>
                                    <h2>Why Invest in Real Estate?</h2>
                                    <p>Start building your real estate investment portfolio today with as little as €100.</p>
                                </div>
                            </div>
                            <div className="col-xxl-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="why__invest__single shadow__effect__secondary">
                                            <img src="assets/images/icons/passive.png" alt="Passive" />
                                            <h5>Passive Income</h5>
                                            <p className="neutral-bottom">Earn income without active management</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="why__invest__single shadow__effect__secondary">
                                            <img src="assets/images/icons/stable.png" alt="Stable Cash Flow" />
                                            <h5>Stable Cash Flow</h5>
                                            <p className="neutral-bottom">Rental payments provide steady cash flow through dividend
                                                payouts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__single shadow__effect__secondary">
                                    <img src="assets/images/icons/tax.png" alt="Tax Advantages" />
                                    <h5>Tax Advantages</h5>
                                    <p className="neutral-bottom">There are numerous tax breaks and favorable deductions associated
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__single shadow__effect__secondary">
                                    <img src="assets/images/icons/capital.png" alt="Capital Appr'n" />
                                    <h5>Capital Appr'n</h5>
                                    <p className="neutral-bottom">Historically, real estate prices have increased over the rude time
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__single shadow__effect__secondary">
                                    <img src="assets/images/icons/protection.png" alt="Inflation protection" />
                                    <h5>Inflation protection</h5>
                                    <p className="neutral-bottom">Home values and rents typically increase during times of inflation
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__single shadow__effect__secondary">
                                    <img src="assets/images/icons/diversifaction.png" alt="Diversification" />
                                    <h5>Diversification</h5>
                                    <p className="neutral-bottom">Low correlation to other asset classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #why invest section end ==== --> */}

            {/* <!-- ==== community section start ==== --> */}
            <section className="community section__space__top over__hi bg__img" data-background="./assets/images/community-bg.png">
                <div className="container">
                    <div className="community__area">
                        <div className="section__header">
                            <h5 className="neutral-top">Smart way to raise money</h5>
                            <h2>Join Thousands of
                                Investors</h2>
                            <p className="neutral-bottom">Individual and institutional investors invest $10–$100,000
                                per deal on Revest.</p>
                        </div>
                        <div className="comunity-wrapper section__space">
                            <div className="buttons">
                                <a href="registration.html" className="button button--effect">Become an Investor</a>
                            </div>
                            <div className="comunity-area">
                                <div className="comunity-item"><img src="./assets/images/community/1.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/2.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/3.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/4.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/5.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/6.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/7.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/8.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/9.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/10.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/11.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/12.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/13.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/14.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/15.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/16.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/17.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/18.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/19.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/22.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/20.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/21.png" alt="comunity"/></div>
                            </div>
                            <div className="comunity-area two">
                                <div className="comunity-item"><img src="./assets/images/community/1.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/2.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/3.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/4.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/5.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/6.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/7.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/8.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/9.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/10.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/11.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/12.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/13.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/14.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/15.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/16.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/17.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/18.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/19.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/22.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/20.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/21.png" alt="comunity"/></div>
                            </div>
                            <div className="comunity-area three">
                                <div className="comunity-item"><img src="./assets/images/community/1.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/2.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/3.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/4.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/5.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/6.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/7.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/8.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/9.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/10.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/11.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/12.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/13.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/14.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/15.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/16.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/17.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/18.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/19.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/22.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/20.png" alt="comunity"/></div>
                                <div className="comunity-item"><img src="./assets/images/community/21.png" alt="comunity"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #community section end ==== --> */}

            {/* <!-- ==== testimonial section start ==== --> */}
            <section className="testimonial testimonial--two section__space pos__rel over__hi bg__img"
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

        </div>
    )
}

export default Home2;