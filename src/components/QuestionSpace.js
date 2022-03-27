import React, { useState } from 'react';

import '../css/QuestionSpace.css'

const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0); //Pregunta Actual

    const [score, setScore] = useState(0);  //Puntuacion

    const [finished, setFinished] = useState(false); //Si ya se respondieron todas las preguntas

    
    const eachQuestion = props.apiResults.map( apiResult => apiResult.question)

    const answers = props.apiResults.map( answer => answer.correct_answer)

    console.log(answers);

    const eachAnswer = answers[onQuestion]

    console.log('answer', eachAnswer);

    const handleAnswerSubmit = (answers) => {
        //añadir puntuación
        if (answers === true) setScore(score + 1)
        //Cambiar a la siguiente pregunta
        //Identificar que no se haya llegado al final del cuestionario
        if (onQuestion === props.apiResults.length -1) {
            setFinished(true);
        } else {
            setOnQuestion(onQuestion + 1)
        }
    }
    
    //Al terminar el quiz enviar a la vista 'Results screen'
    if (finished) return (
        <p>Juego Terminado</p>
    );

    return (
        <>
            <div className='quizContainer'>
                <div className='questionContainer'>
                    <p className='questionSentence'>{eachQuestion[onQuestion]}</p>
                </div>
                <div className='buttonContainer'>
                    <button
                    onClick={() => handleAnswerSubmit(eachAnswer)}
                    >True</button>
                    <button
                    onClick={() => handleAnswerSubmit(eachAnswer)}
                    >False</button>
                </div>
                <div className='questionNumber'>
                    <span>{onQuestion + 1} of</span> {props.apiResults.length}
                </div>
            </div>
        </>
    )
}

export default QuestionSpace;