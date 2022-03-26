import React, { useState } from 'react';

import QuizScreen from '../containers/QuizScreen';

const QuestionSpace = (props) => {

    const [onQuestion, setOnQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [finished, setFinished] = useState(0);


    return (
        <>
            <div>question[onQuestion].question</div>
            <div>
                <button>True</button>
                <button>False</button>
            </div>
            <div>
                <span>{onQuestion + 1} of</span>{props.quantityQuest}
            </div>
        </>
    )
}

export default QuestionSpace;