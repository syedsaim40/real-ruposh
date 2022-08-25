import React from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/MoonLoader";
import "./Loader.css";
const Loader = () => {
    const override = css`
    color: red;
  margin:auto;
  border-color: red;
`;
  return (
      <div className="s">
       
          <RingLoader  size={70} color='black'  css={override} />
      </div>
  );
};

export default Loader;


