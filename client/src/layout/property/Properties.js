/* eslint-disable no-sparse-arrays */
import {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import PropertyItem from './PropertyItem';
import Loading from 'components/Loading';

import { getProperties, getPropertyTypes, removeProperties } from 'actions/property';
import {updateRemainTime} from 'actions/property';

import $ from 'jquery';

window.jQuery = window.$ = $;
//require("jquery-nice-select");
const LIMIT = 8;

const Properties = ({propertyTypes, properties, loading, count, getPropertyTypes, countingdown, getProperties, updateRemainTime, removeProperties}) => {
    const locationRef = useRef();
    const typeRef = useRef();
    const sortRef = useRef();
    
    const [filterData, setFilterData] = useState({
        searchWord: null,
        location: null,
        propertyType: null,
        sortBy: 'date'
    });

    useEffect(() => {
        getPropertyTypes();
        getPropertiesFromServer(filterData, 0);
        if(!countingdown) updateRemainTime();
    }, []);

    const onChangeSelect = (e) => {
        let value = null;
        if(e.target.value !== 'root') value = e.target.value;
        setFilterData({...filterData, [e.target.name]: value});
        removeProperties();
        getPropertiesFromServer({...filterData, [e.target.name]: value}, 0);
    }

    const onChangePropertyTypes = (e) => {
        if(e.target.value === 'root') {
            setFilterData({...filterData, [e.target.name]: null});
            removeProperties();
            getPropertiesFromServer({...filterData, propertyType: null}, 0);
        } else {
            const propertyTypeIdx = propertyTypes.findIndex(type => type.name === e.target.value);
            if(propertyTypeIdx > 0) {
                setFilterData({...filterData, propertyType: propertyTypes[propertyTypeIdx]._id});
                removeProperties();
                getPropertiesFromServer({...filterData, propertyType: propertyTypes[propertyTypeIdx]._id}, 0);
            }
        }
    }

    useEffect(() => {
        const propertyTypeIdx = propertyTypes.findIndex(type => type.name === $(typeRef.current).val());
        if(propertyTypeIdx > 0)
            setFilterData({...filterData, propertyType: propertyTypes[propertyTypeIdx]._id});
    }, [propertyTypes]);

    const onChangeInput = (e) => {
        setFilterData({...filterData, [e.target.name]: e.target.value});
    }

    const onClickSearch = (e) => {
        removeProperties();
        getProperties(filterData, {skip: 0, limit: LIMIT});
    }

    const getPropertiesFromServer = (filter, skip) => {
        getProperties(filter, {skip, limit: LIMIT});
    }

    const onLoadMore = () => {
        getPropertiesFromServer(filterData, properties.length);
    }

    return (
        <div>
            {/* <!-- ==== banner section start ==== --> */}
            <section className="banner__alt bg__img" data-background="./assets/images/banner/banner-two-bg.png">
                <div className="container">
                    <div className="banner__alt__area">
                        <h1 className="neutral-top neutral-bottom">Browse Properties</h1>
                    </div>
                </div>
            </section>
            {/* <!-- ==== banner section end ==== --> */}

            {/* <!-- ==== property filter start ==== --> */}
            <div className="property__filter">
                <div className="container">
                    <div className="property__filter__area">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12 col-xl-6">
                                <div className="property__search__wrapper">
                                    <div className='search-form'>
                                        <div className="input">
                                            <input type="search" name="searchWord" id="propertySearch"
                                                placeholder="Search for properties" onChange={onChangeInput} />
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <button type="submit" className="button button--effect" onClick={onClickSearch}>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3">
                                <div className="property__select__wrapper">
                                    <select className="location__select" id="location" name="location" ref={locationRef} onChange={onChangeSelect}>
                                        <option data-display="Location" value="root">Select Location</option>
                                        <option value="angeles">Los Angeles</option>
                                        <option value="francis">San Francisco, CA</option>
                                        <option value="weldon">The Weldon</option>
                                        <option value="diego">San Diego</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3">
                                <div className="property__select__wrapper">
                                    <select className="property__select" name="propertyType" ref={typeRef} onChange={onChangePropertyTypes}>
                                        <option data-display="Property" value="root">Property Type</option>
                                        {propertyTypes.map(type => <option value={type.name} key={type.name}>{type.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==== #property filter end ==== --> */}

            {/* <!-- ==== properties grid section start ==== --> */}
            <section className="properties__filter section__space__bottom">
                <div className="container wow fadeInUp">
                    <div className="properties__filter__wrapper">
                        <h6>Showing <span>{properties.length} / {count}</span> properties</h6>
                        <div className="grid__wrapper">
                            <select className="grid__select" name="sortBy" id='sortBy' ref={sortRef} onChange={onChangeSelect}>
                                <option data-display="Sort By" value="root">Sort By</option>
                                <option value="date">Date</option>
                                <option value="price">Price</option>
                            </select>
                            <a href="#!" className="grid__btn grid__view grid__btn__active">
                                <i className="fa-solid fa-grip"></i>
                            </a>
                            <a href="#!" className="grid__btn grid__list">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row property__grid__area__wrapper">
                        {
                            loading ? <Loading showYou={true} /> :
                            (properties.map((property, index) => <PropertyItem key={index} property={property} />))
                        }
                    </div>
                    <div className="cta__btn">
                        {count !== properties.length ? <a href="#!" className="button button--effect" onClick={onLoadMore}>Load More</a> : ''}
                    </div>
                </div>
            </section>
            {/* <!-- ==== properties grid section end ==== --> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.property.count,
    properties: state.property.properties,
    propertyTypes: state.propertyType.propertyTypes,
    loading: state.property.loading,
    countingdown: state.property.countingdown
});

export default connect(mapStateToProps, { getPropertyTypes, getProperties, updateRemainTime, removeProperties}) (Properties);