import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, category, setCategory }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes by title..."
                onChange={handleSearch}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Others">Others</option>
            </select>
        </div>
    );
};

export default SearchBar;
