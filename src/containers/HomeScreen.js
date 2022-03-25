import React from 'react';

import '../css/HomeScreen.css';

import Card from '../components/Card/Card';



const HomeScreen = () => {
    return (
        <>
            <div className="main">
                <header>
                    <h1>Welcome to the Trivia Challenge!</h1>
                </header>
                <h2>You will be presented with 10 True or False questions.</h2>
                <h2>Can you score 100%?</h2>
                <h3>BEGIN</h3>
            </div>
        </>
    )
}

export default HomeScreen;