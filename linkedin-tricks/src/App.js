import React from "react";
import "./App.css";
import { AbortFetchRequest } from "./Components/AbortFetchRequest/AbortFetchRequest";
import { AllObjectMethods } from "./Components/AllObjectMethods/AllObjectMethods";
import { CallNodeServer } from "./Components/CallNodeServer/CallNodeServer";
import { Capitalize } from "./Components/Capitalize/Capitalize";
import { ConnectionChecking } from "./Components/ConnetionChecking/ConnectionChecking";
import { ConvertToInt } from "./Components/ConvertToInt/ConvertToInt";
import { DistructorNestedObjects } from "./Components/DistructorNestedObjects/DistructorNestedObjects";
import { GoogleMap } from "./Components/GoogleMap/GoogleMap";
import { HOCExample } from "./Components/HigherOrderComponent/Example";
import { LinkSpeed } from "./Components/LinkSpeed/LinkSpeed";
import { Login } from "./Components/Login/Login";
import { MinAndMax } from "./Components/MinAndMax/MinAndMax";
import { MongoDB } from "./Components/MongoDB/MongoDB";
import { PreventPaste } from "./Components/PreventPaste/PreventPaste";
import { PreventRightClick } from "./Components/PreventRightClick/PreventRightClick";
import { RemoveObjectKey } from "./Components/RemoveObjectKey/RemoveObjectKey";
import { ReplaceAll } from "./Components/ReplaceAll/ReplaceAll";
import { ResizeObserverContainer } from "./Components/ResizeObserver/ResizeObserver";
import { SimpleSwitch } from "./Components/SimpleSwitch/SimpleSwitch";
import { Socket } from "./Components/Socket/Socket";
import { UglyNumber } from "./Components/UglyNumber/UglyNumber";
import { UserLocation } from "./Components/UserLocation/UserLocation";
import { WebCam } from "./Components/WebCam/WebCam";

function App() {
  return (
    <React.Fragment>
      <div className="p-4">All Linkedin Javascript Tricks</div>
      <div className="p-4 bg-light">
        <div className="row m-0">
          <div className="col-12 col-md-6 col-lg-4">
            <ConvertToInt />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ConnectionChecking />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ResizeObserverContainer />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <PreventPaste />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <DistructorNestedObjects />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <LinkSpeed />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UglyNumber />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <PreventRightClick />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <MinAndMax />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <AbortFetchRequest />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <RemoveObjectKey />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ReplaceAll />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <AllObjectMethods />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CallNodeServer />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Socket />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Capitalize />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <MongoDB />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Login />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SimpleSwitch />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <HOCExample />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UserLocation />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <GoogleMap />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <WebCam />
          </div>
        </div>
        <div className="text-center pt-4">developed by ❤️</div>
      </div>
    </React.Fragment>
  );
}

export default App;
