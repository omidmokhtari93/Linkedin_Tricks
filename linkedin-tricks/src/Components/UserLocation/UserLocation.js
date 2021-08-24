import React, { useEffect, useState } from "react";
import { APICall } from "../xshared/APICall";

export const UserLocation = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const [apiLoading, setApiLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  useEffect(() => {
    setLoading(true);
    setApiLoading(true);
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      ///maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setLoading(false);
        setResult(success);
      },
      (error) => {
        setLoading(false);
        setResult(error);
      },
      options
    );

    APICall.get("/get_location", null, (err, res) => {
      setApiLoading(false);
      setApiResult(res);
    });
  }, []);

  return (
    <React.Fragment>
      <p>User Location</p>
      <hr />
      <code className="text-body">
        {"navigator.geolocation.getCurrentPosition"}
      </code>
      <br />
      <br />
      <code className="text-body">and the result is : </code>
      {loading ? (
        <code>fetching your location ...</code>
      ) : (
        <code>
          {result.message
            ? result.message
            : result.coords && (
                <span>
                  your latitude is : {result.coords.latitude} and your longitude
                  is : {result.coords.longitude}
                </span>
              )}
        </code>
      )}
      <hr />
      <code className="text-body">
        {'APICall.get("https://location.services.mozilla.com/v1/geolocate?key=test", null, (err, res) => {'}
        <br />
        <span className="ms-4">{"console.log(res);"}</span>
        <br />
        {"});"}
      </code>
      <br />
      <br />
      <code className="text-body">and the result is : </code>
      {apiLoading ? (
        <code>fetching your location ...</code>
      ) : (
        apiResult && (
          <code>
            your latitude is : {apiResult.location.lat} and your longitude is :{" "}
            {apiResult.location.lng}
          </code>
        )
      )}
    </React.Fragment>
  );
};
