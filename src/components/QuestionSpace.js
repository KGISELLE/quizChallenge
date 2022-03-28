import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import '../css/QuestionSpace.css'


const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0); //Pregunta Actual

    const [score, setScore] = useState(0);  //Puntuacion

    const [finished, setFinished] = useState(false); //Si ya se respondieron todas las preguntas

    const [optionChosen, setOptionChosen] = useState(''); //Opxion escogida botones "True" or "false"
    

    const questCategory = props.apiResults.map( categoryQuest => categoryQuest.category)
    
    const eachQuestion = props.apiResults.map( apiResult => apiResult.question)
    console.log(eachQuestion[onQuestion])

    const answers = props.apiResults.map( answer => answer.correct_answer)
    console.log(answers[onQuestion])
    
    const eachAnswer = answers[onQuestion]
    
    
    const handleAnswerSubmit = (eachAnswer) => {
        //añadir puntuación
        if (eachAnswer === optionChosen) {
            setScore(score + 1)
        }
        //Cambiar a la siguiente pregunta
        //Comprobar que se llego al final de las preguntas
        if (onQuestion === props.apiResults.length -1) {
            setFinished(true);
        } else {
            setOnQuestion(onQuestion + 1)
        }
    }
    console.log('score', score);
    
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
                    onClick={() => {
                        handleAnswerSubmit(eachAnswer); 
                        setOptionChosen('True')}}
                    >True</button>
                    <button
                    onClick={() => {
                        handleAnswerSubmit(eachAnswer); 
                        setOptionChosen('False')
                    }}
                    >False</button>
                </div>

                <div className='questionNumber'>
                    <span>{onQuestion + 1} </span>of {props.apiResults.length}
                </div>

            </div>
        </>
    )
}

export default QuestionSpace;