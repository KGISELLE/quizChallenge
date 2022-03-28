import React from 'react';

import { Link } from 'react-router-dom';

import '../css/ResultsScreen.css'


const ResultsScreen = () => {
    return (
        <>
            <div className='resultsView'>
                <header className='headerQuiz'>
                        <h2 className='titleResults'>You scored</h2>
                        <h2 className='titleScore'>
                            <span>score / </span>apiResults.length
                        </h2>
                </header>

                <div className='quizContainer'>
                    <div className='resultsContainer'>
                        <p className='resultSentence'>Pregunta 1</p>
                        <p className='resultSentence'>Pregunta 2</p>
                        <p className='resultSentence'>Pregunta 3</p>
                        <p className='resultSentence'>Pregunta 4</p>
                        <p className='resultSentence'>Pregunta 5</p>
                    </div>

                    <Link to='/' className='linkHome'>
                        <p className='home'>PLAY AGAIN?</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ResultsScreen;