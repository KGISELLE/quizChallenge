import React, { useState } from 'react';

import ResultsScreen from '../components/ResultsScreen';

import '../css/QuestionSpace.css'


const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0); //Pregunta Actual

    const [score, setScore] = useState(0);  //Puntuacion

    const [finished, setFinished] = useState(false); //Si ya se respondieron todas las preguntas

    const [optionChosen, setOptionChosen] = useState(''); //Opcion escogida botones "True" or "false"

    
    
    const questCategory = props.apiResults.map( categoryQuest => categoryQuest.category)
    
    const allQuestions = props.apiResults.map( apiResult => apiResult.question)
    
    const oneQuestion = allQuestions[onQuestion];

    const answers = props.apiResults.map( answer => answer.correct_answer)
    
    const eachAnswer = answers[onQuestion]
    console.log(props.apiResults[onQuestion], 'preguntas')
    
    const questionsQuantity = props.apiResults.length;
    
    
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
        <div> 
            <ResultsScreen 
            score={score} 
            questionsQuantity={questionsQuantity} 
            allQuestions={allQuestions}
            eachAnswer={eachAnswer}
            optionChosen={optionChosen}
            /> 
        </div>
    );


    return (
        <>  
            <header className='headerQuiz'>
                    <h1 className='titleQuiz'>{questCategory[onQuestion]}</h1>
            </header>

            <div className='quizContainer'>
                <div className='questionContainer'>
                    <p className='questionSentence'>{oneQuestion}</p>
                </div>

                <div className='buttonContainer'>
                    <button
                    onClick={() => {
                        handleAnswerSubmit(eachAnswer); 
                        setOptionChosen('True');
                    }}
                    >True</button>
                    <button
                    onClick={() => {
                        handleAnswerSubmit(eachAnswer); 
                        setOptionChosen('False');
                    }}
                    >False</button>
                </div>

                <div className='questionNumber'>
                    <span>{onQuestion + 1} </span>of {questionsQuantity}
                </div>

            </div>
        </>
    )
}

export default QuestionSpace;