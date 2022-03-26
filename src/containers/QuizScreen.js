import React, { useEffect, useState } from 'react';


import '../css/QuizScreen.css';


const QuizScreen = () => {

    const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

    const [questions, setQuestions] = useState([]);
    
    const fetchAPI = async() => {
        const response = await fetch(URL);
        console.log(response.status);
        const responseJSON = await response.json();
        setQuestions(responseJSON.results);
        console.log(responseJSON.results);
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <>
            <div className="quizCategory">
                <header className='headerQuiz'>
                    <h1 className='titleQuiz'>traer categoria de la trivia de API</h1>
                </header>
                <ul>
                    {questions.map( (question, index) => (
                        <li key={index}>{question.category}</li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default QuizScreen;