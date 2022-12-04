import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {isEmpty} from 'utils/validation';

const PropertyValue = ({serverErrors}) => {
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
        <div id="property-value" className="post__section container">
            {/* <!-- ==== #banner section end ==== --> */}
            <h4 className="neutral-top mb-4 mt-4 text-center">Property Value</h4>
                <div className="input input--secondary">
                    <label htmlFor="firstName">*Estimated Property Value (Tax Appraisal or FMV if known)</label>
                    <input type="number" name="firstName" id="firstName" min={1}
                        required="required" value={formData.firstName} onChange={onChangeInput} />
                </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    serverErrors: state.auth.errors,
});

export default connect(mapStateToProps, {}) (PropertyValue);