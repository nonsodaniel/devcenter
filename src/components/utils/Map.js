import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={10} defaultCenter={props.position}>
      {props.isMarkerShown && (
        <Marker position={props.position} />
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;
