import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from './components/favorite-page/favorite';
import Home from './components/home-page/home';
import Layout from './shared/layout/layout';
import { FAVORITE_URL, HOME_URL } from './shared/consts/url';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WeatherReducer from './shared/reducers/weatherReducer';
import './App.css';

function App() {
  const store = createStore(WeatherReducer);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
