import React from "react";
import "../../Home/Home.css";
import { Fragment } from "react";
// import { Audio } from "react-loader-spinner";
import "react-loading-skeleton/dist/skeleton.css";
import gf from "../../../images/logo.png";

import "./Loader.css";
const loader1 = () => {
  return (
    <Fragment>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
            <img width="5%" src={gf} alt="" />
          </div>
        </div>
      </div>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
            <img width="5%" src={gf} alt="" />
          </div>
        </div>
      </div>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
            <img width="5%" src={gf} alt="" />
          </div>
        </div>
      </div>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
            <img width="5%" src={gf} alt="" />
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default loader1;
