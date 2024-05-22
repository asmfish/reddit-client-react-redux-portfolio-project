import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/Posts/postsSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    const handleChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    return (
    <>
        <div className="logo-container">
            <FaReddit className="logo-icon" /> 
            <span className="logo-text">Reddit<strong>ClientMinimal</strong></span>
        </div>
        <form className="search" onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Search"
            aria-label="Search posts"
            value={searchTermLocal}
            onChange={handleChange}
        />
        <button type="submit"  aria-label="Search" onClick={handleSearch}>
            <HiOutlineSearch className="search-icon"/>
        </button>
        </form>
    </>
    );
};

export default Header;
