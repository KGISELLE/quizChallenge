import React, { useEffect, useState } from 'react';

import '../css/QuizScreen.css';

import QuestionSpace from '../components/QuestionSpace';


const QuizScreen = () => {

    const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

    const [questions, setQuestions] = useState([]);

    const [quantityQuest, setQuantityQuest] = useState([]);

    
    const fetchAPI = async() => {
        const response = await fetch(URL);
        console.log(response.status);
        const responseJSON = await response.json();
        setQuestions(responseJSON.results);
        
        setQuantityQuest(responseJSON.results.length);
        console.log(responseJSON);

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
                <div>
                    <QuestionSpace question={questions} quantityQuest={quantityQuest}/>
                </div>
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