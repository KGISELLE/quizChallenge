import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import HomeScreen from './containers/HomeScreen';
import QuizScreen from './containers/QuizScreen';
// import ResultsScreen from './components/ResultsScreen';


const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>} />
                <Route path='/quiz' element={<QuizScreen/>} />
                {/* <Route path='/result' element={<ResultsScreen/>} /> */}
            </Routes>
        </Router>
    )
}

export default App;