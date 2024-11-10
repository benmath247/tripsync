import React, { useState } from 'react';
import './Survey.css';
import QuestionInput from './QuestionInput';
import Results from './Results'

function Survey() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
        'What type of travel are you interested in?',
        'What activity are you planning to do on your vacation?',
        'When do you plan to arrive/depart?',
        'How many days do you want to stay?',
        'How many people will be traveling?',
        'Are you open to driving during the trip?',
        'Do you have a budget in mind for this trip?',
        'What level of comfort are you imagining?',
        "I found these destinations for you. Just pick the one you like and book all that you need under the links listed. If you don't like these results go back and change your choices."
    ];

    const handleNext = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        setCurrentQuestion((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentQuestion((prev) => prev - 1);
    };

    return (
        <div className="container py-5">
            <div className="progress" style={{ height: '5px', marginBottom: '20px' }}>
                <div className="progress-bar" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
            </div>
            <h2 className="text-center">TripSync Survey</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    {currentQuestion < questions.length ? (
                        <QuestionInput
                            question={questions[currentQuestion]}
                            index={currentQuestion}
                            onNext={handleNext}
                            onBack={handleBack}
                            answer={answers[currentQuestion]}
                            answers={answers}
                        />
                    ) : (
                        <div>
                            <h3>Thank you for completing the survey!</h3>
                            <ul>
                                <Results questions={questions} answers={answers} />
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Survey;
