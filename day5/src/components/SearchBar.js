import React, { useState } from 'react';


const SearchBar = ({onSearch})=>{
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search-bar">
        <input type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit" 
        onClick={() => onSearch(searchTerm)}>
            Search</button>
        </div>
    );
}

export default SearchBar;

