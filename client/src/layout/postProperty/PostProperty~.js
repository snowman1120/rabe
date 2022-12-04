import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';
import LocationInformation from './sections/LocationInformation';
import PropertyValue from './sections/PropertyValue';

const PostProperty = () => {
    
    return (
        <div>
            {/* <!-- ==== banner section start ==== --> */}
            <section className="support__banner post__banner bg__img clear__top"
                data-background="./assets/images/contact-banner-bg.png">
                <div className="container">
                    <div className="support__banner__area">
                        <div className="support__banner__inner">
                            <h1 className="neutral-top">Property to be Listed</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ==== #banner section end ==== --> */}

            {/* <!-- ==== dashboard section start ==== --> */}
            <div className="post-property section__space__bottom">
                <div className="container">
                    <div className="dashboard__area">
                        <div className="row">
                            <div className="col-xxl-4">
                                <Sidebar />
                            </div>
                            <div className="col-xxl-8">
                                <div className="collapse__sidebar">
                                    <h4>Property to be Listed</h4>
                                    <a href="javascript:void(0)" className="collapse__sidebar__btn">
                                        <i className="fa-solid fa-bars-staggered"></i>
                                    </a>
                                </div>
                                <div className="main__content-post">
                                    <LocationInformation />
                                    <hr></hr>
                                    <PropertyValue />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==== #dashboard section end ==== --> */}
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {}) (PostProperty);