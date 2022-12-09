import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

import {connect} from 'react-redux';
import PropertyItem from './PropertyItem';
import BidItem from './BidItem';
import Loading from 'components/Loading';

import {getMyProperties, updateRemainTime} from 'actions/property';
import {getBidsForProperty} from 'actions/bids';

const MyProperties = ({loading, properties, countingdown, getMyProperties, updateRemainTime, isAuthenticated}) => {
    useEffect(() => {
        if(!countingdown) updateRemainTime();
    }, [countingdown]);

    useEffect(() => {
        if(isAuthenticated === null) return;
        getMyProperties();
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
                                    properties.length > 0 ?
                                    properties.map(property => (
                                        <div className="accordion-item content__space">
                                            <PropertyItem key={property._id} property={property} />
                                            <div className="accordion-collapse collapse show"
                                                aria-labelledby="headingQuestionsOne" data-bs-parent="#accordionExampleQuestions">
                                                <div className="accordion-body">
                                                    {
                                                        property.bids.length > 0 && Object.keys(property.bids[0]).length > 0 ?
                                                            property.bids.map(bid => 
                                                                    Object.keys(bid).length > 0 ? (<BidItem key={bid._id} bid={bid} property={property} />) : '') :
                                                            <p className='no-proposal-msg'>There is no proposal</p>
                                                    }
                                                </div>
                                            </div>
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
    properties: state.property.myProperties,
    countingdown: state.property.countingdown,
    loading: state.property.loading,
});

export default connect(mapStateToProps, {getMyProperties, getBidsForProperty, updateRemainTime}) (MyProperties);