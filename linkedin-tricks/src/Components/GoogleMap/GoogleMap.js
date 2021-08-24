import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { APICall } from "../xshared/APICall";

const Marker = ({ text }) => (
  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: "50px",
      background: "red",
    }}
  ></div>
);

export const GoogleMap = () => {
  const [longLat, setLongLat] = useState({ lng: 35, lat: 50 });
  const zoom = 0;
  useEffect(() => {
    const getBackendLocation = () => {
      APICall.get("/get_location", null, (err, res) => {
        if (res) {
          setLongLat({
            lng: res.location.lng,
            lat: res.location.lat,
          });
        }
      });
    };

    navigator.geolocation.getCurrentPosition(
      (success) => {
        setLongLat({
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        });
      },
      (error) => {
        getBackendLocation();
      }
    );
  }, []);
  return (
    <React.Fragment>
      <p>Google Map</p>
      <hr />
      <code>this example show you on the map based on your location</code>
      <br />
      <code>{"=> red point is you 🙂"}</code>
      <br />
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBvCum6kVDF0TSDNHJYHmOqwdgsu3-Zm9I" }}
          defaultCenter={longLat}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={longLat.lat} lng={longLat.lng} />
        </GoogleMapReact>
      </div>
    </React.Fragment>
  );
};
