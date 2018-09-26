import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

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
        <MapWithAMarker
            googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7asYcehlowNnBcD47M-veJp9i21snaqg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `288.786px`, width: "527.484px", top:"553.497px", left: "140.532px", position:"absolute"}} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default googleMap;
