import { useState } from "react";
import {connect} from 'react-redux';
import { isEmpty } from "utils/validation";

import ContactModal from "./ContactModal";
import {getContactInfoForSeller} from 'actions/bids';

const BidItem = ({bid, property, getContactInfoForSeller}) => {
    const [contactInfo, setContactInfo] = useState(null);

    const [contactModalShow, setContactModalShow] = useState(false);
    const onViewContactInfo = (userID, property) => {
        if(!property.winner || property.winner.user !== userID) return;
        getContactInfoForSeller(userID, property._id, viewContactInfo);
    }

    const viewContactInfo = (info) => {
        setContactModalShow(true);
        setContactInfo(info);
    }

    return (
        <div>
            <ContactModal
                show={contactModalShow}
                contactinfo={contactInfo}
                onHide={() => setContactModalShow(false)}
            />
            <div className="row mb-4">
                <div className="col-md-3">
                    <img className="avatar avatar-lg mb-3" src={isEmpty(bid.user.avatar) ? "assets/images/profile.jpg" : bid.user.avatar} alt="avatar"
                        onClick={() => onViewContactInfo(bid.user._id, property)} />
                    <h6 className="text-center"><b>{bid.user && (`${bid.user.firstName} ${bid.user.lastName}`)}</b></h6>
                </div>
                <div className="col-md-9">
                    <h5>
                        {bid.commission}&nbsp;
                        {property && property.winner && property.winner.bid === bid._id ? "(Win)" : ""}
                    </h5>
                    <div className="row">
                        <div className="col-md-4  mb-2">
                            <p><b>Licencse Number:&nbsp;</b>{bid.user && bid.user.licenseNumber}</p>
                        </div>
                    </div>
                    <div>
                        <p><b>Agent Name</b></p>
                        <p>{bid.user && bid.user.agentName}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {getContactInfoForSeller}) (BidItem);