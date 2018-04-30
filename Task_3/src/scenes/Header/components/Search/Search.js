import React from "react";
import { render } from "react-dom";
import { SearchButton, SearchFilter, SearchField } from "./components";

const Search = () => {
    return <div className="search">
        <SearchField/>
        <div className="search_container">
            <span>Search by</span>
            <SearchFilter />
            <SearchButton />
        </div>
    </div>;
};

export default Search;