import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { numberWithCommas } from 'utils/helper';
import $ from 'jquery';
import { useSearchParams } from 'react-router-dom';

import StripeModal from './StripeModal';
import SuccessModal from 'components/SuccessModal';
//import Loading from 'components/Loading';

import {postProperty} from 'actions/property';

window.jQuery = window.$ = $;
const PropertyItem = ({property, postProperty}) => {
    const [stripeModalShow, setSuccessStripeModalShow] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const [successModalShow, setSuccessModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const propertyId = localStorage.getItem('posting_property_id');
        if(propertyId !== property._id.toString()) return;
        const redirectStatus = searchParams.get('redirect_status');
        if(redirectStatus === 'succeeded') {
            const payTime = parseInt(localStorage.getItem('pay_time'));
    
            // if(isNaN(payTime) || new Date().getTime() - payTime > 5000) {
            //     window.location.href = '/cart';
            //     return;
            // }
            if(isNaN(payTime)) {
                window.location.href = '/cart';
                return;
            }

            localStorage.removeItem('pay_time');
            localStorage.removeItem('posting_property_id');
            
            //setIsLoading(true);
            postProperty(propertyId, onResult);
        }
    }, [searchParams]);

    const onResult = (res) => {
        if(res.success) {
            setSuccessModalShow(true);
        }
        //setIsLoading(false);
    }

    const gotoDetailPage = (e) => {
        return window.location.href = `/property-details/${property._id}`;
    }

    return (
        <div className="property__grid__area__wrapper__inner">
            <StripeModal 
                onHide={() => setSuccessStripeModalShow(false)}
                show={stripeModalShow}
                propertyId={property._id}
            />
            
            {/* <Loading showYou={isLoading} /> */}
            <SuccessModal
                show={successModalShow}
                onHide={() => setSuccessModalShow(false)}
                message="Your property successfully saved in you cart. Please pay to post."
                goto={{
                    description_1: 'Click',
                    url: '/cart',
                    name: 'here',
                    description_2: 'to see your cart'
                }}
            />
            <div className="property__list__wrapper">
                <div className="row d-flex">
                    <div className="property__grid__area__wrapper__inner__two col-xl-5">
                        <div className="property__item__image column__space--secondary">
                            <div className="img__effect">
                                <a href="#!" onClick={gotoDetailPage}>
                                    <img src={property.photos.length > 0 ? property.photos[0] : '/assets/images/income.png'} alt="Los Angeles" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="property__grid__area__wrapper__inner__three col-xl-7">
                        <div className="property__item__content">
                            <div className="item__head justify-content-center">
                                <div className="item__head__right">
                                    <div className="countdown__wrapper">
                                        <div className="countdown">
                                            <h6>
                                                <b>
                                                    {new Date(property.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                </b>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="property-info col-md-3 col-xs-12">
                                    <div className="item__info__single">
                                        <p><b>{property.propertyType.name}</b></p>
                                    </div>
                                    <div className="item__info__single">
                                        <p className="property-rooms">
                                            <span><b>{property.bedrooms}</b>&nbsp;bed&nbsp;&nbsp;<b>{property.bathrooms}</b>&nbsp;bath</span>
                                        </p>
                                    </div>
                                    <div className="item__info__single">
                                        <p className="property-price"><b>${numberWithCommas(property.price)}</b></p>
                                    </div>
                                </div>
                                <div className="property-desc col-md-9 col-xs-12">
                                    <p>{property.description}</p>
                                </div>
                            </div>
                            <div className="item__footer">
                                <div className="item__cta__group">
                                    <a href="#!" className="button button--effect" onClick={() => setSuccessStripeModalShow(true)}>Pay Now</a>
                                    <a href="#!" className="button button--secondary button--effect">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {postProperty})(PropertyItem);