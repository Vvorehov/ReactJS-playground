import React from "react";
import { Logo } from "../../../Logo";
import "./styles.scss";

const HeaderTop = () => {
  return <div className="header-top">
    <Logo siteName='netflixroulette'/>
    <a className="backToHome" href="/">Search</a>
  </div>;
};

export default HeaderTop;