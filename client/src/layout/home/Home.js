/* eslint-disable no-sparse-arrays */
import {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {updateRemainTime, getFeaturedProperties} from 'actions/property';
import PropertyItem from './PropertyItem';
import Loading from 'components/Loading';
import Footer from 'layout/footer/Footer';

const Main = ({ getFeaturedProperties, properties, loading, count, countingdown, updateRemainTime}) => {

    useEffect(() => {
        getFeaturedProperties();
        if(!countingdown) updateRemainTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                                        <a href="/properties" className="button button--secondary button--effect">Browse All
                                            Properties</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            loading ? <Loading showYou={true} /> :
                            (properties.map((property, index) => <PropertyItem key={index} property={property} />))
                        }
                    </div>
                </div>
            </section>
            {/* <!-- ==== #featured properties section end ==== --> */}

            {/* <!-- ==== testimonial section start ==== --> */}
            {/* <section className="testimonial section__space pos__rel over__hi bg__img"
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
            </section> */}
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
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.property.count,
    properties: state.property.properties,
    loading: state.property.loading,
    countingdown: state.property.countingdown
});
export default connect(mapStateToProps, { getFeaturedProperties, updateRemainTime}) (Main);