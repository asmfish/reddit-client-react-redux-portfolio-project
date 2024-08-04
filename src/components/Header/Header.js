import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { setSearchTerm } from '../../features/Posts/postsSlice';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../menuSlice';

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
         <button className="menu-btn" onClick={() => dispatch(toggleMenu())}>
          ☰
        </button>
        <div className="logo-container">
            <FaReddit className="logo-icon" /> 
            <span className="logo-text">Reddit<strong>Minimal</strong></span>
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
