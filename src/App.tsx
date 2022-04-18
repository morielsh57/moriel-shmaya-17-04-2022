import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Favorite from './components/favorite-page/favorite';
import Home from './components/home-page/home';
import { FAVORITE_URL, HOME_URL } from './shared/consts/url';
import Layout from './shared/layout/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={HOME_URL} element={<Home />} />
            <Route path={FAVORITE_URL} element={<Favorite />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
