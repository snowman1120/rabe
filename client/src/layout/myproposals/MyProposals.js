import {useState, useEffect} from 'react';

import {connect} from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loading from 'components/Loading';
import Footer from 'layout/footer/Footer';

import {getBidsForAgent, getContactInfoForAgent} from 'actions/bids';
import {updateRemainTime} from 'actions/property';

import Table from 'react-bootstrap/Table';
import {numberWithCommas} from 'utils/helper';

// import AllTab from './AllTab';
// import InProgressTab from './InProgressTab';

import ContactModal from './ContactModal';

import './style.css';

const MyProposals = ({loading, isAuthenticated, bids, countingdown, getBidsForAgent, updateRemainTime, getContactInfoForAgent}) => {
    const [progressBids, setProgressBids] = useState([]);
    const [winningBids, setWinningBids] = useState([]);

    const [contactModalShow, setContactModalShow] = useState(false);
    const [contactInfo, setContactInfo] = useState(null);

    const gotoDetailPage = (propertyID) => {
        return window.location.href = `/property-details/${propertyID}`;
    }

    useEffect(() => {
        if(isAuthenticated === null) return;
        getBidsForAgent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    useEffect(() => {
        if(bids && bids.length > 0) {
            let prog_bids = [], win_bids = [];
            bids.forEach(bid => {
                if(bid.property.status === 'inprogress') {
                    prog_bids.push(bid);
                } else {
                    if(bid.property.winner && bid._id === bid.property.winner.bid) win_bids.push(bid);
                }
            });
            setProgressBids(prog_bids);
            setWinningBids(win_bids);
        }
    }, [bids]);

    useEffect(() => {
        if(!countingdown) updateRemainTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countingdown]);

    const onViewInfo = (userID, propertyID,) => {
        getContactInfoForAgent(userID, propertyID, viewContactInfo);
    }

    const viewContactInfo = (contactInfo) => {
        setContactModalShow(true);
        setContactInfo(contactInfo);
    }

    if(isAuthenticated === false) {
        return window.location.href = "/";
    }

    return (
        <div>
            <ContactModal
                show={contactModalShow}
                contactInfo={contactInfo}
                onHide={() => setContactModalShow(false)}
            />
            <Loading showYou={loading} />
            {/* <!-- ==== banner section start ==== --> */}
            <section className="banner key-banner banner--secondary clear__top bg__img"
                data-background="./assets/images/banner/program-bg.png">
                <div className="container">
                    <div className="banner__area">
                        <h1 className="neutral-top">Proposals</h1>
                    </div>
                </div>
                <img src="assets/images/banner/affi-thumb.png" alt="Career" className="banner__thumb" />
            </section>
            {/* <!-- ==== #banner section end ==== --> */}
            <section className="pt-5 pb-5">
                <div className='container'>
                    <Tabs
                        defaultActiveKey="all"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                        >
                        <Tab eventKey="all" title="All">
                            <div className='pt-5 pb-5'>
                                <Table striped className='proposal-table all'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Photo</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Bedrooms</th>
                                            <th className='text-center'>Bathrooms</th>
                                            <th className='text-center'>Left to bid</th>
                                            <th className='text-center'>Commission</th>
                                            <th className='text-center'>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bids.map(bid => (
                                                <tr key={bid._id} className='proposal-item'>
                                                    <td className='text-center'><img className='proposal-img' 
                                                        src={bid.property.photos.length > 0 ? bid.property.photos[0] : '/assets/images/income.png'} alt="" 
                                                        onClick={() => gotoDetailPage(bid.property._id)} /></td>
                                                    <td className='text-center'>${numberWithCommas(bid.property.price)}</td>
                                                    <td className='text-center'>{bid.property.bedrooms}</td>
                                                    <td className='text-center'>{bid.property.bathrooms}</td>
                                                    <td className='text-center'>
                                                        {
                                                            bid.property.status === 'inprogress' ?
                                                            (
                                                                <div className="countdown">
                                                                    <h5>
                                                                        <span className="days">{bid.property.DHMS && bid.property.DHMS.days}</span><span className="ref">d</span>
                                                                        <span className="seperator">:</span>
                                                                    </h5>
                                                                    <h5>
                                                                        <span className="hours">{bid.property.DHMS && bid.property.DHMS.hours}</span><span className="ref">h</span>
                                                                        <span className="seperator">:</span>
                                                                    </h5>
                                                                    <h5>
                                                                        <span className="minutes">{bid.property.DHMS && bid.property.DHMS.minutes}</span><span className="ref">m</span>
                                                                        <span className="seperator"></span>
                                                                    </h5>
                                                                </div>
                                                            ) : 'N/A'
                                                        }
                                                    </td>
                                                    <td className='text-center'>{bid.commission}</td>
                                                    <td className='text-center'>
                                                        {
                                                            bid.property.status === 'inprogress' ?
                                                                <span className='proposal-status pending'>pending</span> : 
                                                                (
                                                                    <span className={`proposal-status ${bid.property.winner && bid._id === bid.property.winner.bid ? 'winning' : 'not-win'}`}>
                                                                        {bid.property.winner && bid._id === bid.property.winner.bid ? 'winning' : 'ended'}
                                                                    </span>
                                                                )
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="inprogress" title="In Progress">
                            <div className='pt-5 pb-5'>
                                <Table striped className='proposal-table all'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Photo</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Bedrooms</th>
                                            <th className='text-center'>Bathrooms</th>
                                            <th className='text-center'>Left to bid</th>
                                            <th className='text-center'>Commission</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            progressBids.map(bid => (
                                                <tr key={bid._id} className='proposal-item'>
                                                    <td className='text-center'><img className='proposal-img' 
                                                        src={bid.property.photos.length > 0 ? bid.property.photos[0] : '/assets/images/income.png'} alt="" 
                                                        onClick={() => gotoDetailPage(bid.property._id)} /></td>
                                                    <td className='text-center'>${numberWithCommas(bid.property.price)}</td>
                                                    <td className='text-center'>{bid.property.bedrooms}</td>
                                                    <td className='text-center'>{bid.property.bathrooms}</td>
                                                    <td className='text-center'>
                                                        {
                                                            bid.property.status === 'inprogress' ?
                                                            (
                                                                <div className="countdown">
                                                                    <h5>
                                                                        <span className="days">{bid.property.DHMS && bid.property.DHMS.days}</span><span className="ref">d</span>
                                                                        <span className="seperator">:</span>
                                                                    </h5>
                                                                    <h5>
                                                                        <span className="hours">{bid.property.DHMS && bid.property.DHMS.hours}</span><span className="ref">h</span>
                                                                        <span className="seperator">:</span>
                                                                    </h5>
                                                                    <h5>
                                                                        <span className="minutes">{bid.property.DHMS && bid.property.DHMS.minutes}</span><span className="ref">m</span>
                                                                        <span className="seperator"></span>
                                                                    </h5>
                                                                </div>
                                                            ) : 'N/A'
                                                        }
                                                    </td>
                                                    <td className='text-center'>{bid.commission}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="winning" title="Winning">
                            <div className='pt-5 pb-5'>
                                <Table striped className='proposal-table all'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>Photo</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Bedrooms</th>
                                            <th className='text-center'>Bathrooms</th>
                                            <th className='text-center'>Commission</th>
                                            <th className='text-center'>Contact information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            winningBids.map(bid => (
                                                <tr key={bid._id} className='proposal-item'>
                                                    <td className='text-center'><img className='proposal-img' 
                                                        src={bid.property.photos.length > 0 ? bid.property.photos[0] : '/assets/images/income.png'} alt="" 
                                                        onClick={() => gotoDetailPage(bid.property._id)} /></td>
                                                    <td className='text-center'>${numberWithCommas(bid.property.price)}</td>
                                                    <td className='text-center'>{bid.property.bedrooms}</td>
                                                    <td className='text-center'>{bid.property.bathrooms}</td>
                                                    <td className='text-center'>{bid.commission}</td>
                                                    <td className='text-center'>
                                                        <button className='button button--effect' onClick={() => onViewInfo(bid.property.user, bid.property._id)}>View contact info</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    bids: state.bids.bids,
    loading: state.bids.loading,
    countingdown: state.property.countingdown,
});

export default connect(mapStateToProps, {getBidsForAgent, updateRemainTime, getContactInfoForAgent}) (MyProposals);