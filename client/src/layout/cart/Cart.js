import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

import {connect} from 'react-redux';
import PropertyItem from './PropertyItem';
import Loading from 'components/Loading';

import {getCart} from 'actions/property';

const Cart = ({loading, cart, getCart, isAuthenticated}) => {
    useEffect(() => {
        if(isAuthenticated === null) return;
        getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    if(isAuthenticated === false) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Loading showYou={loading} />
            {/* <!-- ==== hero section start ==== --> */}
            <section className="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img"
                data-background="./assets/images/hero/list-bg.png">
                <div className="container">
                    <div className="hero__area">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hero__content">
                                    <h5 className="neutral-top">List Your Property and sell instantly</h5>
                                    <h1>Sell your property,
                                        Online & hassle-free
                                    </h1>
                                    <p className="primary neutral-bottom">
                                        Receiving rent from a commercial property and now want to sell it instantly? List your
                                        property and convert the lakhs of annual rent you are receiving into Crores by selling
                                        to 5000+ real estate investors on Revest.
                                    </p>
                                    <div className="hero__cta__group">
                                        <a href="post-property" className="button button--secondary button--effect">Submit My Property</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #hero section end ==== --> */}

            <section className="faq section__space">
                <div className="container">
                    <div className="faq__area">
                        <div className="faq__group">
                            <div className="accordion" id="accordionExampleQuestions">
                                {
                                    cart.length > 0 ?
                                    cart.map(property => (
                                        <div className="accordion-item content__space" key={property._id} >
                                            <PropertyItem property={property} />
                                        </div>
                                    )) :
                                    (<h3 className="text-center">There are no properties</h3>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    cart: state.property.cart,
    loading: state.property.loading,
});

export default connect(mapStateToProps, {getCart}) (Cart);