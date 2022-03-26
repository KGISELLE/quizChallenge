import React, { useEffect, useState } from 'react';

import '../css/QuizScreen.css';

import QuestionSpace from '../components/QuestionSpace';


const QuizScreen = () => {

    const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

    const [apiResults, setApiResults] = useState([]); //Trae objeto results de la API
    
    const fetchAPI = async() => {
        const response = await fetch(URL);
        console.log(response.status);
        const responseJSON = await response.json();
        setApiResults(responseJSON.results);
        console.log(responseJSON.results);
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    const questCategory = apiResults.map( apiResult => apiResult.category)

    console.log(questCategory[0]);

    return (
        <>
            <div className="quizView">
                <header className='headerQuiz'>
                    <h1 className='titleQuiz'>{questCategory[0]}</h1>
                </header>
                <div>
                    <QuestionSpace apiResults={apiResults} />
                </div>
                {/* <ul>
                    {apiResults.map( (apiResult, index) => (
                        <li key={index}>{apiResult.question}</li>
                    ))}
                </ul> */}
                

            </div>
        </>
    )
}

export default QuizScreen;