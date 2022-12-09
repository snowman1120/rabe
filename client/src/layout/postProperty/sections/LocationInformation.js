import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {isEmpty} from 'utils/validation';

const LocationInformation = ({serverErrors}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        msg: ''
    });

    useEffect(() => {
        setErrors(serverErrors);
    }, [serverErrors]);

    const onChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        <div id="location-information" className="post__section container">
            {/* <!-- ==== #banner section end ==== --> */}
            <h4 className="neutral-top mb-4 mt-4 text-center">Location Information</h4>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*Street/Box Number</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Street/Box Number"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Street Direction</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Street Direction"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*Street Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Street Name"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Street Type</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Street Type"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Street Direction Stuffix</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Street Direction Stuffix"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*Country</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Country"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*City</label>
                        <input type="text" name="firstName" id="firstName" placeholder="City"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*State</label>
                        <input type="text" name="firstName" id="firstName" placeholder="State"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">*Zip</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Zip"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Zip+4</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Zip+4"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Lot</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Lot"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Block</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Block"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Subdivision</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Subdivision"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Complex Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Complex Name"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Lake Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Lake Name"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6 col-sm-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Area</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Area"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Planned Development</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Planned Development"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Unit#</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Unit#"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6 col-sm-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Sub Area</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Sub Area"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                        {!isEmpty(errors.firstName) ? <div className="error__message">{errors.firstName}</div> : ''}
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="input input--secondary">
                        <label htmlFor="firstName">Additional Legal</label>
                        <input type="text" name="firstName" id="firstName" placeholder="Additional Legal"
                            required="required" value={formData.firstName} onChange={onChangeInput} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
});

export default connect(mapStateToProps, {}) (LocationInformation);