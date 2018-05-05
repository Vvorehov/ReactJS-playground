import React from "react";
import { Search, FilmInfo, Header } from "./components";

import "./styles.scss";

const TopBlock = () => {
    return (<section id="top-block">
        <Header />
        <Search />
        <FilmInfo id="284054" />
    </section>);
};

export default TopBlock;