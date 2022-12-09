import {useState, useEffect} from 'react';

import $ from 'jquery';
window.jQuery = window.$ = $;

const SelectUser = ({onChange}) => {
    const [youare, setYouare] = useState(null);

    const onClickSellerBox = (e) => {
        setYouare('seller');
    }

    const onClickAgentBox = (e) => {
        setYouare('agent');
    }

    const onClickNext = () => {
        if(!youare) return;
        onChange(youare);
    }

    return (
        <div className='container selectuser-wrapper'>
            <div className='row mt-5'>
                <div className={'col-md-5 user-box seller-box ' + (youare === 'seller' ? 'select' : '')} onClick={onClickSellerBox}>
                    I am a seller
                </div>
                <div className='col-md-2'></div>
                <div className={'col-md-5 user-box agent-box ' + (youare === 'agent' ? 'select' : '')} onClick={onClickAgentBox}>
                    I am an agent
                </div>
            </div>
            <div className='next-button-wrapper mt-5'>
                <button className={'button button--effect d-none d-sm-block next-button ' + (!youare ? 'disabled' : '')} onClick={onClickNext}>Next</button>
            </div>
        </div>
    );
}

export default SelectUser;