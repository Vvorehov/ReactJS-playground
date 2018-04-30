import React from "react";
import { render } from "react-dom";
import { Search } from "./components/Search"

const Header = () => {
    return <header>
        <h1>Find your movie</h1>
        <Search />
    </header>;
};

export default Header;