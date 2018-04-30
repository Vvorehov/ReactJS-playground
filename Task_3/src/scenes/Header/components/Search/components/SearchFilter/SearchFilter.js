import React from "react";

const SearchFilter = () => {
    return <div>
        <span>Search by</span>
        <button id="search_title" className="btn">Title</button>
        <button id="search_genre" className="btn">Genre</button>
    </div>;
};

export default SearchFilter;