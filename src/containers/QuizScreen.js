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
    }

    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <>
            <div className='quizView'>
                <QuestionSpace apiResults={apiResults} />
            </div>
        </>
    )
}

export default QuizScreen;