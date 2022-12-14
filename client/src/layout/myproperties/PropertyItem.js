import { numberWithCommas } from 'utils/helper';
import $ from 'jquery';

window.jQuery = window.$ = $;
const PropertyItem = ({property}) => {
    const gotoDetailPage = (e) => {
        // localStorage.setItem('propertyID', property._id);
        return window.location.href = `/property-details/${property._id}`;
    }

    return (
        <div className="property__grid__area__wrapper__inner">
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
                                    {property && property.status === 'inprogress' ? (
                                        <div className="countdown__wrapper">
                                            <p className="secondary">
                                                <i className="fa-solid fa-clock"></i> Left to bid
                                            </p>
                                            <div className="countdown">
                                                <h6>
                                                    <span className="days"><b>{property.DHMS.days}</b></span><span className="ref"><b>D</b></span>
                                                    <span className="seperator">:</span>
                                                </h6>
                                                <h6>
                                                    <span className="hours"><b>{property.DHMS.hours}</b></span><span className="ref"><b>H</b></span>
                                                    <span className="seperator">:</span>
                                                </h6>
                                                <h6>
                                                    <span className="minutes"><b>{property.DHMS.minutes}</b></span><span className="ref"><b>M</b></span>
                                                    <span className="seperator"></span>
                                                </h6>
                                            </div>
                                        </div>
                                    ) : <h5><b>Ended</b></h5>}
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
                            {/* <div className="item__footer">
                                <div className="item__cta__group">
                                    <a href="registration" className="button button--effect">Submit Now</a>
                                    <a href="#!" className="button button--secondary button--effect">Details</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (PropertyItem);