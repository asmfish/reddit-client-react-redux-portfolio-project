import logo from './logo.svg';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Posts from './features/Posts/Posts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  // State to manage sidebar visibility
  const isMenuVisible = useSelector((state) => state.menu.isVisible);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Posts />
      </main>
      <aside className={`sidebar ${isMenuVisible ? '' : 'hidden'}`}>
        <Subreddits />
      </aside>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
