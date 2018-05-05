import React from "react";
import { Logo } from "../../../Logo";
import "./styles.scss";

const Header = () => {
  return <header id="header" className="header-top">
    <Logo siteName='netflixroulette'/>
    <a className="backToHome" href="/">Search</a>
  </header>;
};

export default Header;