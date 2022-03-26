import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import HomeScreen from './containers/HomeScreen';
import QuizScreen from './containers/QuizScreen';


const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>} />
                <Route path='/quiz' element={<QuizScreen/>} />
            </Routes>
        </Router>
    )
}

export default App;