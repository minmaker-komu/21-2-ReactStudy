import React from "react";
import { GoogleMapLoader, GoogleMap } from 'google-map-react';


export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} />}
            googleMapElement={
                <GoogleMap defaultZoom={12} defualtCenter={{lat: props.lat, lng: props.lon}}/>
            }
        />
    );
}