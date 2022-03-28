import React from 'react';

import { Link } from 'react-router-dom';

import '../css/ResultsScreen.css'


const ResultsScreen = (props) => {

    const color = (props.eachAnswer === props.optionChosen) ? '+' : '-';

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
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[0]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[1]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[2]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[3]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[4]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[5]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[6]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[7]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[8]}</p>
                        <p className='resultSentence'>{color + ' ' + props.allQuestions[9]}</p>
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