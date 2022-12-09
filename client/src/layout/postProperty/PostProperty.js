/* eslint-disable no-sparse-arrays */
import {useState, useEffect, useRef} from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import $ from 'jquery';

import {isEmpty} from 'utils/validation';

import Address from './Address';
import ImageUploader from 'layout/postProperty/ImageUploader';
import SuccessModal from 'components/SuccessModal';

import { addProperty, getPropertyTypes } from 'actions/property';

window.jQuery = window.$ = $;
//require("jquery-nice-select");

const PostProperty = ({ serverErrors, addProperty, getPropertyTypes, propertyTypes, isAuthenticated }) => {
    const selectRef = useRef();
    const unitRef = useRef();
    
    const [modalShow, setModalShow] = useState(false);

    const [formData, setFormData] = useState({
        propertyType: '',
        unit: '',
        yearBuilt: '',
        bedrooms: '',
        bathrooms: '',
        address: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        photos: [],
        description: '',
        price: 0,
        commission: 1.5
    });

    const [photos, setPhotos] = useState([]);

    const [errors, setErrors] = useState({
        propertyType: '',
        unit: '',
        yearBuilt: '',
        bedrooms: '',
        bathrooms: '',
        address: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        photos: '',
        description: '',
        price: '',
        commission: ''
    });

    useEffect(() => {
        getPropertyTypes();
    }, []);
    
    useEffect(() => {
        const propertyTypeIdx = propertyTypes.findIndex(type => type.name === $(selectRef.current).val());
        if(propertyTypeIdx >= 0) {
            setFormData({...formData, propertyType: propertyTypes[propertyTypeIdx]._id});
            switchUnitStatus();
        }
    }, [propertyTypes]);

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const switchUnitStatus = () => {
        const propertyTypeIdx = propertyTypes.findIndex((type) => type.name === $(selectRef.current).val());
        if(propertyTypeIdx < 0) return;
        if(propertyTypes[propertyTypeIdx].unit) {
            $(unitRef.current).removeClass('d-none');
        } else {
            $(unitRef.current).addClass('d-none');
        }
    }

    const onChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        if(e.target.name === 'commission') {
            let value = parseFloat(e.target.value);
            if(value < 1.5 || value > 7) {
                setErrors({...errors, commission: true});
            } else {
                setErrors({...errors, commission: false});
            }
        }
    }

    const onChangeType = (e) => {
        const propertyTypeIdx = propertyTypes.findIndex(type => type.name === e.target.value);
        if(propertyTypeIdx > 0) {
            setFormData({...formData, propertyType: propertyTypes[propertyTypeIdx]._id});
            switchUnitStatus();
        }
    }

    const onChangeAddress = (place) => {
        let address = {};
        console.log(place)
        address.full = place.formatted_address;
        const components = place.address_components;
        components.forEach(value => {
            switch(value.types[0]) {
                case 'street_number':
                    address.streetNumber = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'route':
                    address.route = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'locality':
                    address.locality = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'country':
                    address.country = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'administrative_area_level_1':
                    address.areaLevel_1 = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'administrative_area_level_2':
                    address.areaLevel_2 = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'administrative_area_level_3':
                    address.areaLevel_3 = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                case 'postal_code':
                    address.postalCode = {
                        long: value.long_name,
                        short: value.short_name
                    };
                    break;
                default:
            }
        });
        setFormData({...formData, address})
        if(!address.postalCode) {
            return setErrors({...errors, address: 'Enter a correct address'});
        }
        if(!address.country || address.country.long != 'Canada') {
            return setErrors({...errors, address: 'Enter a correct address'});
        }
        setErrors({...errors, address: null});
    }

    const onChangePhotos = (photos) => {
        setPhotos(photos);
    }

    const successSaveInfo = (property) => {
        setFormData({
            propertyType: propertyTypes[0]._id,
            unit: '',
            yearBuilt: '',
            bedrooms: '',
            bathrooms: '',
            address: '',
            street: '',
            city: '',
            state: '',
            postalCode: '',
            photos: [],
            description: '',
            price: 0,
            commission: 1.5
        })
        uploadPhotos(property);
    }

    const uploadPhotos = async (property) => {
        const photoData = new FormData();
        photos.forEach(photo => photoData.append('photos[]', photo.file));

        const api = axios.create({
            baseURL: '/api',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        api.defaults.headers.common['x-auth-token'] = localStorage.token;

        const response = await api.post(`/property/upload/${property._id}`, photoData);
        if(response.data.success) {
            setModalShow(true);

            setFormData({
                propertyType: '',
                unit: '',
                yearBuilt: '',
                bedrooms: '',
                bathrooms: '',
                address: '',
                street: '',
                city: '',
                state: '',
                postalCode: '',
                photos: [],
                description: '',
                price: 0
            });
        }
    }

    const onSubmit = async () => {
        let t_errors = {};
        if(isEmpty(formData.description)) t_errors = {...t_errors, description: 'Required field'};
        if(isEmpty(formData.address) || isEmpty(formData.address.full)) t_errors = {...t_errors, address: 'Required field'};
        if(isEmpty(formData.bedrooms)) t_errors = {...t_errors, bedrooms: 'Required field'};
        if(isEmpty(formData.bathrooms)) t_errors = {...t_errors, bathrooms: 'Required field'};
        if(isEmpty(formData.price)) t_errors = {...t_errors, price: 'Required field'};

        const commission = parseFloat(formData.commission);
        if(commission < 1.5 || commission > 7) {
            t_errors = {...t_errors, commission: 'You must enter a commission between 1.5 and 7'};
        }
        if(isEmpty(t_errors)) {
            addProperty(formData, successSaveInfo);
        } else {
            setErrors(t_errors);
        }
    }

    if (isAuthenticated === false) {
      return <Navigate to="/" />;
    }
    
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
                    <div className="post-property__area">
                        <h4>Property Information</h4>
                        <div className='regi__type row'>
                            <div className="col-md-5 col-xs-12">
                                <label htmlFor="typeSelect">Type of Property</label>
                                <select className="type__select" ref={selectRef} id="typeSelect" name="role" onChange={onChangeType}>
                                    {
                                        propertyTypes.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className='col-md-3 col-xs-12 unit-input' ref={unitRef}>
                                <div className="input input--secondary">
                                    <label htmlFor="unit">Unit#</label>
                                    <input type="text" name="unit" id="unit" placeholder="Unit#"
                                        required="required" onChange={onChangeInput} value={formData.unit} />
                                    {!isEmpty(errors.unit) ? <div className="error__message">{errors.unit}</div> : ''}
                                </div>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <div className="input input--secondary">
                                    <label htmlFor="yearBuilt">Year built</label>
                                    <input type="number" name="yearBuilt" id="yearBuilt" placeholder="Year built" min={1500} max={new Date().getFullYear()}
                                        required="required" onChange={onChangeInput} value={formData.yearBuilt} />
                                    {!isEmpty(errors.yearBuilt) ? <div className="error__message">{errors.yearBuilt}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <div className="input input--secondary">
                                    <label htmlFor="bedrooms">Number of bedrooms</label>
                                    <input type="number" name="bedrooms" id="bedrooms" placeholder="Number of bedrooms" min={0}
                                        required="required" onChange={onChangeInput} value={formData.bedrooms} />
                                    {!isEmpty(errors.bedrooms) ? <div className="error__message">{errors.bedrooms}</div> : ''}
                                </div>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <div className="input input--secondary">
                                    <label htmlFor="bathrooms">Number of bathrooms</label>
                                    <input type="number" name="bathrooms" id="bathrooms" placeholder="Number of bathrooms" min={0}
                                        required="required" onChange={onChangeInput} value={formData.bathrooms} />
                                    {!isEmpty(errors.bathrooms) ? <div className="error__message">{errors.bathrooms}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <div>
                            <Address onChange={onChangeAddress} error={errors.address} />
                        </div>
                        <div className='row'>
                            <ImageUploader onChange={onChangePhotos} />
                        </div>
                        <h4> Description </h4>
                        <div className='row'>
                            <div>
                                <div className="input input--secondary">
                                    {/* <label htmlFor="description">Property Description</label> */}
                                    <textarea type="text" name="description" id="description" placeholder="Property Description"
                                        required="required" onChange={onChangeInput} value={formData.description} ></textarea>
                                    {!isEmpty(errors.description) ? <div className="error__message">{errors.description}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <h4> Price </h4>
                        
                        <div className="input input--secondary">
                            <input type="number" name="price" id="price" placeholder="Price" value={formData.price}
                                required="required" onChange={onChangeInput} />
                            {!isEmpty(errors.price) ? <div className="error__message">{errors.price}</div> : ''}
                        </div>
                        <h4> Get this listing now </h4>
                        <div className="input input--secondary">
                            <input type="number" name="commission" id="commission" placeholder="Commission" onChange={onChangeInput} value={formData.commission} />
                            {!isEmpty(errors.commission) ? <div className="error__message">{errors.commission}</div> : ''}
                        </div>

                        <div className='row' style={{justifyContent: 'right'}}>
                            <div className="input__button col-md-4 col-xs-12">
                                <button type="submit" className="button button--effect" onClick={onSubmit}> Post Now </button>
                            </div>
                        </div>
                        {!isEmpty(errors.msg) ? <div className="error__message">{errors.msg}</div> : ''}
                    </div>
                </div>
            </div>
            {/* <!-- ==== #dashboard section end ==== --> */}

            <SuccessModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                message="You have successfully posted your property"
                goto={{
                    description_1: 'Click',
                    url: '/properties',
                    name: 'here',
                    description_2: 'to see the property list'
                }}
            />
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    serverErrors: state.property.errors,
    isAuthenticated: state.auth.isAuthenticated,
    propertyTypes: state.propertyType.propertyTypes
});

export default connect(mapStateToProps, {addProperty, getPropertyTypes}) (PostProperty);