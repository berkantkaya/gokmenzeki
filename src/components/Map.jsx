import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({size}){
  const defaultProps = {
    center: {
      lat: 38.4814249,
      lng: 27.0884864
    },
    zoom: 17
  };


  return (
    // Important! Always set the container height explicitly
    <div className="mb-10" style={{ height: size, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}