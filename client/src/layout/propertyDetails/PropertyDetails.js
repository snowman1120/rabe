import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

import { numberWithCommas } from 'utils/helper';
import Loading from 'components/Loading';
import {getProperty, updateRemainTime, getDistance2property} from 'actions/property';
import {bidToProperty, updateBid, getListingNow} from 'actions/bids';

import SuccessModal from 'components/SuccessModal';
import ConfirmModal from './ConfirmModal';
import CongrateModal from './CongrateModal';
import Footer from 'layout/footer/Footer';

import $ from 'jquery';
window.jQuery = window.$ = $;

const MAX_LEFT_DAYS = 5;

const PropertyDetails = ({
    loading, 
    property, 
    countingdown, 
    serverErrors, 
    getProperty, 
    getDistance2property, 
    bidToProperty, 
    updateBid, 
    getListingNow,
    updateRemainTime,
    isAuthenticated, 
    user
}) => {
    const [distance, setDistance] = useState(Infinity);
    const [commission, setCommissioin] = useState(7);
    const {propertyID} = useParams();

    const [errors, setErrors] = useState({
        commission: false,
        msg: ''
    });

    const [successModalShow, setSuccessModalShow] = useState(false);
    const [confirmModalShow, setConfirmModalShow] = useState(false);
    const [congrateModalShow, setCongrateModalShow] = useState(false);

    useEffect(() => {
        if(!countingdown) updateRemainTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countingdown]);

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    useEffect(() => {
        if(isAuthenticated === null) return;
        getProperty(propertyID, user && user._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user]);

    useEffect(() => {
        async function fetchData() {
            if(user && user.role === 'agent') {
                try {
                    const distance = await getDistance();
                    if(!distance) setDistance(Infinity);
                    else setDistance(distance);
            
                    if(property && property.bid) {
                        setCommissioin(property.bid.commission);
                    }
    
                    $('.progress-bar').width(`${(property.DHMS.days * 86400 + property.DHMS.hours * 3600 + property.DHMS.minutes * 60) * 100 / (MAX_LEFT_DAYS * 86400)}%`)
                } catch(err) {
                    console.log(err.message);
                }
            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [property])

    const getDistance = async () => {
        if(!isAuthenticated || !user || user.role !== 'agent' || !property.postalCode) return;
        return await getDistance2property(user.postalCode, property.postalCode);
    }

    const onChangeCommission = (e) => {
        let value = parseFloat(e.target.value);
        if(value < 1.5 || value > 7) {
            setErrors({...errors, commission: true});
        } else {
            setErrors({...errors, commission: false});
        }
        setCommissioin(value);
    }

    const onClickBid = (e) => {
        if(commission < 1.5 || commission > 7) {
            setErrors({...errors, commission: true});
            return;
        }
        bidToProperty(property._id, commission, successBid);
    }

    const onClickUpdate = (e) => {
        if(commission < 1.5 || commission > 7) {
            setErrors({...errors, commission: true});
            return;
        }
        updateBid(property._id, commission, successBid);
    }

    const onGetListingNow = () => {
        setConfirmModalShow(true);
    }

    const handleListingNow = () => {
        getListingNow(property._id, property.commission, successGetNow);
        setConfirmModalShow(false);
    }

    const successBid = () => {
        setSuccessModalShow(true);
    }

    const successGetNow = () => {
        setCongrateModalShow(true);
    }

    return (
        <div>
            <SuccessModal 
                show={successModalShow}
                onHide={() => setSuccessModalShow(false)}
                message={property.bid ? "You have successfully changed" : "You have successfully bid on the property"}
                goto={{
                    description_1: 'Click',
                    url: '/properties',
                    name: 'here',
                    description_2: 'to see the property list'
                }}/>
            
            <ConfirmModal 
                show={confirmModalShow}
                onHide={() => setConfirmModalShow(false)}
                onConfirm={handleListingNow}
                percentage={property.commission}
            />
            <CongrateModal 
                show={congrateModalShow}
                onHide={() => setCongrateModalShow(false)}
            />
            <Loading showYou={loading} />
            {/* <!-- ==== details section start ==== --> */}
            <div className="property__details__banner bg__img clear__top"
                data-background="/assets/images/banner/property-details-banner.png">
            </div>
            <section className="p__details faq section__space__bottom">
                <div className="container">
                    <div className="p__details__area">
                        <div className="row">
                            <div className={(isAuthenticated && user && user.role === 'agent' && property.status === 'inprogress') ? "col-lg-7" : ""}>
                                <div className="p__details__content">
                                    <a href="#gallery" className="button button--effect button--secondary"><i
                                            className="fa-solid fa-images"></i> Browse Gallery</a>
                                    <div className="group__one"></div>
                                    <div className="group__two">
                                        <h4>Property Information</h4>
                                        <Table striped>
                                            <tbody>
                                                <tr>
                                                    <td className='text-center'><b>Type of Property</b></td>
                                                    <td className='text-center'>{property.propertyType ? property.propertyType.name : ''}</td>
                                                </tr>{
                                                    property && property.unit ? 
                                                    (<tr>
                                                        <td className='text-center'><b>Unit#</b></td>
                                                        <td className='text-center'>{property ? property.unit : ''}</td>
                                                    </tr>)
                                                    : <></>}<tr>
                                                    <td className='text-center'><b>Year Built</b></td>
                                                    <td className='text-center'>{property ? property.yearBuilt : ''}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center'><b>Number of bedrooms</b></td>
                                                    <td className='text-center'>{property ? property.bedrooms : ''}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center'><b>Number of bathrooms</b></td>
                                                    <td className='text-center'>{property ? property.bathrooms : ''}</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-center'><b>Price</b></td>
                                                    <td className='text-center'>{property ? `$${numberWithCommas(property.price)}` : ''}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="group__two">
                                        <h4>Description</h4>
                                        <p>{property.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={(isAuthenticated && user && user.role === 'agent' && property.status === 'inprogress') ? "col-lg-5" : "d-none"}>
                                <div className="p__details__sidebar">
                                    <div className="intro">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to bid
                                            </p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">{property.DHMS && property.DHMS.days}</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours">{property.DHMS && property.DHMS.hours}</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">{property.DHMS && property.DHMS.minutes}</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <h5>Price : <span>${numberWithCommas(property.price)}</span></h5>
                                        <div className="progress__type progress__type--two">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" 
                                                    aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="project__info">
                                                <p className="project__has">
                                                    <span className="project__has__investors">{property.bidCount} Bids</span>
                                                     {/* | <span className="project__has__investors__amount"><i className="fa-solid fa-dollar-sign"></i> 1,94,196</span> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group brin">
                                        <div className="acus__content">
                                            <div>
                                                {(distance / 1000) > 75 ? '' : (<div className="suby">
                                                    <div className="input input--secondary mb-0 mt-3 w-100">
                                                        <input type="number" name="commission" id="commissioin" placeholder="Enter your desired commission" min="1.5" max="7"
                                                         value={commission}    required="required" onChange={onChangeCommission} />
                                                        {errors.commission ? <div className="error__message">You must enter a commission between 1.5 and 7</div> : ''}
                                                    </div>
                                                    {property.bid ? <button type="submit" className="button button--effect w-100" onClick={onClickUpdate}>Change Now</button> :
                                                    <button type="submit" className="button button--effect w-100" onClick={onClickBid}>Bid now</button>}
                                                    <button type="submit" className="button button--effect w-100 get-listing-button" onClick={onGetListingNow}>Get this listing now for {property.commission}%</button>
                                                </div>)}
                                            </div>
                                        </div>
                                        <p className="text-center neutral-bottom">
                                            <a href="contact-us">Request a free callback</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #details section end ==== --> */}

            {/* <!-- ==== property gallery two section start ==== --> */}
            <section className="p__gallery wow fadeInUp" id="gallery">
                <div className="container">
                    <hr className="divider" />
                    <div className="p__gallery__area section__space pt-lg-5 pb-lg-5">
                        <div className="title__with__cta">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                    <h2>Property Gallery</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <a href="/contact-us" className="button button--secondary button--effect">Request
                                            info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row p__gallery__single">{
                                property.photos ? property.photos.map(photo => (
                                    <div key={photo} className="col-md-6 col-lg-4 gallery__single__two">
                                        <a href={photo}>
                                            <img src={photo} alt="Property" />
                                        </a>
                                    </div>
                                )) : ''
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== property gallery two section end ==== --> */}

            {/* <!-- ==== market section start ==== --> */}
            <section className="market section__space over__hi">
                <div className="container">
                    <div className="market__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 col-xl-5">
                                <div className="market__thumb thumb__rtl column__space">
                                    <img src="/assets/images/market-illustration.png" alt="Explore the Market" />
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
                                    <img src="/assets/images/arrow.png" alt="Go to" />
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
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    property: state.property.property,
    loading: state.property.loading,
    countingdown: state.property.countingdown,
    serverErrors: state.bids.errors,
});

export default connect(mapStateToProps, {getProperty, getDistance2property, bidToProperty, updateBid, updateRemainTime, getListingNow}) (PropertyDetails);