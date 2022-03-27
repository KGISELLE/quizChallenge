import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import '../css/QuestionSpace.css'


const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0); //Pregunta Actual

    const [score, setScore] = useState(0);  //Puntuacion

    const [finished, setFinished] = useState(false); //Si ya se respondieron todas las preguntas
    

    const questCategory = props.apiResults.map( categoryQuest => categoryQuest.category)
    
    const eachQuestion = props.apiResults.map( apiResult => apiResult.question)
    console.log(eachQuestion[onQuestion])

    const answers = props.apiResults.map( answer => answer.correct_answer)
    console.log(answers[onQuestion])

    const eachAnswer = answers[onQuestion]

    
    console.log('score', score);

    const handleAnswerSubmit = (answers) => {
        //añadir puntuación
        if (answers) {
            setScore(score + 1)
        }
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
        <div className='finishContainer'> 
            <Link to='/result'>
                <button>Show results</button>
            </Link>    
        </div>
    );


    return (
        <>  
            <header className='headerQuiz'>
                    <h1 className='titleQuiz'>{questCategory[onQuestion]}</h1>
            </header>

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