import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Favorite from './components/favorite-page/favorite';
import Home from './components/home-page/home';
import Layout from './shared/layout/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/fvorite" element={<Favorite />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
