import React, { useState, useRef } from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';

import $ from 'jquery';

window.jQuery = window.$ = $;
const SingleImageUploadComponent = ({handleImage, defaultImage}) => {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const fileRef = useRef();

    const uploadSingleFile = (e) => {
        // setFile(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }

    const chooseImage = (e) => {
      $(fileRef.current).trigger('click');
      setErrorMessage(null);
      setSuccess(false);
    }

    const upload = async (e) => {
        if(!file) {
          setErrorMessage('Please choose an image.');
          return;
        }
        const formData = new FormData()
        formData.append("avatar", file);
        try {
          if(!localStorage.token) return <Navigate to='/login' />

          const api = axios.create({
            baseURL: '/api',
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          api.defaults.headers.common['x-auth-token'] = localStorage.token;

          const response = await api.post('/users/upload', formData);
          handleImage(response.data);
          setSuccess(true);
        } catch(error) {
          if(typeof error === 'string') setErrorMessage(error);
        }
    }

    let imgPreview;
    if (file) {
        imgPreview = <img src={URL.createObjectURL(file)} alt='' />;
    } else {
      imgPreview = <img src={defaultImage} alt='' />;
    }
    return (
        <form className='single-image-upload-area'>
            <div className="form-group preview" onClick={chooseImage}>
                {imgPreview}
            </div>
            <div className="form-group">
                <input type="file" ref={fileRef} className="form-control d-none" onChange={uploadSingleFile} />
            </div>
            <button type="button" className="button button--effect upload" onClick={upload}>Save</button>
            {errorMessage ? <div className='error__message'>{errorMessage}</div> : ''}
            {success ? <div className='notification_message'>Your profile picture has been changed</div> : ''}
        </form >
    )
}

export default SingleImageUploadComponent;