import React, { useState, useRef } from "react";
import { StandaloneSearchBox, LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { isEmpty } from "utils/validation";

import GOOGLE_MAP_API_KEY from 'google_map_api_key';

const Address = ({ error, onChange }) => {

  const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
  const [position, setPosition] = useState({
    lat: 45.5018869,
    lng: -73.56739189999999
  });
  const inputRef = useRef();

  const handlePlaceChanged = () => { 
      const [ place ] = inputRef.current.getPlaces();
      if(place) { 
          setPosition({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          });
          onChange(place);
      } 
  }

  const onLoad = marker => {
    
  }

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} libraries={["places"]}>
            <StandaloneSearchBox
                onLoad={ref => inputRef.current = ref}
                onPlacesChanged={handlePlaceChanged}
            >
              <div className="input input--secondary">
                  {/* <label htmlFor="firstName"> Address </label> */}
                  <h4> Address </h4>
                  <input type="text" name="address" id="address" placeholder="Enter Location" />
                  {!isEmpty(error) ? <div className="error__message">{error}</div> : ''}
              </div>
            </StandaloneSearchBox>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={15}
            >
              <Marker
                onLoad={onLoad}
                position={position}
              />
            </GoogleMap>
        </LoadScript>
    );
};

export default Address;