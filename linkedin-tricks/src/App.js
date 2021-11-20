import React from "react";
import "./App.css";
import { AbortFetchRequest } from "./Components/AbortFetchRequest/AbortFetchRequest";
import { AllObjectMethods } from "./Components/AllObjectMethods/AllObjectMethods";
import { CallNodeServer } from "./Components/CallNodeServer/CallNodeServer";
import { Capitalize } from "./Components/Capitalize/Capitalize";
import { ColorPicker } from "./Components/ColorPicker/ColorPicker";
import { ConnectionChecking } from "./Components/ConnetionChecking/ConnectionChecking";
import { ConvertToInt } from "./Components/ConvertToInt/ConvertToInt";
import { Covid19Cases } from "./Components/Covid19Cases/Covid19Cases";
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
import { TicTacToe } from "./Components/TicTacToe/TicTacToe";
import { UglyNumber } from "./Components/UglyNumber/UglyNumber";
import { UserLocation } from "./Components/UserLocation/UserLocation";
import { WebCam } from "./Components/WebCam/WebCam";

function App() {
  return (
    <React.Fragment>
      <div className="p-4">All Linkedin Javascript Tricks</div>
      <div className="p-4 bg-light">
        <div className="row m-0">
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <ConvertToInt />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <ConnectionChecking />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <ResizeObserverContainer />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <PreventPaste />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <DistructorNestedObjects />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <LinkSpeed />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <UglyNumber />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <PreventRightClick />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <MinAndMax />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <AbortFetchRequest />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <RemoveObjectKey />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <ReplaceAll />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <AllObjectMethods />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <CallNodeServer />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <Socket />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <Capitalize />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <MongoDB />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <Login />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <SimpleSwitch />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <HOCExample />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <UserLocation />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <GoogleMap />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <WebCam />
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 bordered"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TicTacToe />
          </div>
          <div className="col-12 col-md-12 col-lg-12 bordered">
            <Covid19Cases />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bordered">
            <ColorPicker />
          </div>
        </div>
        <div className="text-center pt-4">developed by ❤️</div>
      </div>
    </React.Fragment>
  );
}

export default App;
