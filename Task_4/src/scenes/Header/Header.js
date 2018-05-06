import React from "react";
import { Logo } from "../Logo";
import "./styles.scss";

const Header = () => {
  return <header id="header">
    <Logo siteName="netflixroulette"/>
    <a className="backToHome" href="/">Search</a>
  </header>;
};

export default Header;