import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import HomeScreen from './containers/HomeScreen';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>} />
            </Routes>
        </Router>
    )
}

export default App;