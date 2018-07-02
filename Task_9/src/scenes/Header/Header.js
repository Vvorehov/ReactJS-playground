import React from "react";
import { Logo } from "../Logo";
import "./styles.scss";

const Header = (props) => {
  return <header id="header">
    <Logo siteName="netflixroulette"/>
    <a className={props.showSearchLink ? 'backToHome':'isHidden'} href="/">Search</a>
  </header>;
};

export default Header;