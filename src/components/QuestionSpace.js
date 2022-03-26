import React, { useState } from 'react';

import '../css/QuestionSpace.css'

const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0); //Pregunta Actual

    const [score, setScore] = useState(0);  //Puntuacion

    const [finished, setFinished] = useState(0); //Si ya se respondieron todas las preguntas

    
    const eachQuestion = props.apiResults.map( apiResult => apiResult.question)

    // console.log(res[0]);


    return (
        <>
            {/* <ul>
                {props.apiResults.map( (apiResult, index) => (
                    <li key={index}>{apiResult.question}</li>
                ))}
            </ul> */}
            <div className='quizContainer'>
                <div className='questionContainer'>
                    <p className='questionSentence'>{eachQuestion[0]}</p>
                </div>
                <div className='buttonContainer'>
                    <button>True</button>
                    <button>False</button>
                </div>
                <div className='questionNumber'>
                    <span>{onQuestion + 1} of</span> {props.apiResults.length}
                </div>
            </div>
        </>
    )
}

export default QuestionSpace;