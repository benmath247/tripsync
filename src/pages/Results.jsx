import React from 'react';

export default function Results({ questions, answers }) {
    const formatAnswer = (index) => {
        const answer = answers[index.toString()];
        if (typeof answer === 'object') {
            if ('startDate' in answer && 'endDate' in answer) {
                return `From ${answer.startDate} to ${answer.endDate}`;
            } else if ('adults' in answer || 'children' in answer || 'pets' in answer) {
                return `Adults: ${answer.adults}, Children: ${answer.children || 0}, Pets: ${answer.pets || 0}`;
            }
        }
        return answer;
    };

    return (
        <div className="container mt-4">
            <h2>Trip Details</h2>
            <ul className="list-group">
                {questions.map((question, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{question}</strong>
                        <div>{formatAnswer(index)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

