import {useState, useEffect} from 'react';

const Home3 = () => {
    return (
        <div>
            {/* <!-- ==== hero section start ==== --> */}
            <section className="hero hero--two hero--three clear__top pos__rel over__hi bg__img"
                data-background="./assets/images/hero/hero-three-bg.png">
                <div className="container">
                    <div className="hero__area">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="hero__content">
                                    <h5 className="neutral-top">Smart & Secure Real Estate Investment Platform</h5>
                                    <h1>Invest in the future
                                        of real estate
                                    </h1>
                                    <p className="primary neutral-bottom">
                                        Start earning monthly rental income and capital growth with our property-backed
                                        investments
                                    </p>
                                    <div className="hero__cta__group">
                                        <a href="business-loan" className="button button--secondary button--effect">Get
                                            Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #hero section end ==== --> */}

            {/* <!-- ==== why invest two section start ==== --> */}
            <section className="why__invest__two section__space">
                <div className="container">
                    <div className="why__invest__two__area wow fadeInUp">
                        <div className="section__header">
                            <h5 className="neutral-top">Smarter Property Investing</h5>
                            <h2>Why Invest in
                                Real Estate?</h2>
                            <p className="neutral-bottom">Start building your real estate investment portfolio today with as little
                                as € 100.</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__two__single__item">
                                    <img src="assets/images/icons/secure.png" alt="Secure Investment" />
                                    <h5>Secure Investment</h5>
                                    <p className="neutral-bottom">Pellentesque molestie, quam ac porttitor venenatis ipsum .</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__two__single__item">
                                    <img src="assets/images/icons/transparent.png" alt="Transparent Platform" />
                                    <h5>Transparent Platform</h5>
                                    <p className="neutral-bottom">Pellentesque molestie, quam ac porttitor venenatis ipsum .</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__two__single__item">
                                    <img src="assets/images/icons/cashout.png" alt="Cash out any time" />
                                    <h5>Cash out any time</h5>
                                    <p className="neutral-bottom">Pellentesque molestie, quam ac porttitor venenatis ipsum .</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <div className="why__invest__two__single__item">
                                    <img src="assets/images/icons/reinvest.png" alt="Reinvest" />
                                    <h5>Reinvest</h5>
                                    <p className="neutral-bottom">Pellentesque molestie, quam ac porttitor venenatis ipsum .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #why invest section end ==== --> */}

            {/* <!-- ==== featured properties in grid section start ==== --> */}
            <section className="properties__grid properties__grid--two section__space__top">
                <div className="container">
                    <div className="properties__grid__area wow fadeInUp">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Featured Properties</h2>
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
            {/* <!-- ==== #featured properties in grid section end ==== --> */}

            {/* <!-- ==== start step section start ==== --> */}
            <section className="start start--two start--three section__space">
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

            {/* <!-- ==== testimonial section start ==== --> */}
            <section className="testimonial  section__space pos__rel over__hi bg__img"
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

export default Home3;