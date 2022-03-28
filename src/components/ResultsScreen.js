import React from 'react';

import { Link } from 'react-router-dom';

import '../css/ResultsScreen.css'


const ResultsScreen = (props) => {

    const questionSymbol = (props.eachAnswer === props.optionChosen) ? '+' : '-';

    return (
        <>
            <div className='resultsView'>
                <header className='headerQuiz'>
                        <h2 className='titleResults'>You scored</h2>
                        <h2 className='titleScore'>
                            <span className='questionsGood'>{props.score} </span>/ {props.questionsQuantity}
                        </h2>
                </header>


                <div className='container'>
                    <div className='resultsContainer'>
                        {props.allQuestions.map((pregunta) => (
                            <p className='resultSentence'>{questionSymbol + ' ' + pregunta}</p>
                        ))}
                        {/* {props.answers.map((respuesta) => (
                            <p>{respuesta}</p>
                        ))} */}
                        {/* {props.optionChosen.map((option) => (
                            <p>{option + 'opcionescogida'}</p>
                        ))} */}
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