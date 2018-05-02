import React from "react";
import { Search, FilmInfo, HeaderTop } from "./components";

import "./styles.scss";

const Header = () => {
    return <header id="header">
        <HeaderTop />
        <Search />
        <FilmInfo id="284054" />
    </header>;
};

export default Header;