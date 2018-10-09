import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import Fade from "react-reveal/Fade";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15.5}
      defaultCenter={{ lat: 35.645, lng: 139.709}}
    >
      <Marker
        position={{ lat: 35.645684, lng: 139.709142 }}
      />
    </GoogleMap>
));
  


const googleMap = () => {

    return (
        <Fade bottom>
            <MapWithAMarker
                googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7asYcehlowNnBcD47M-veJp9i21snaqg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className="map-container"  />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Fade>
    )
}

export default googleMap;
