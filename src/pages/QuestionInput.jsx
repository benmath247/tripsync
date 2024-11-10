import React, { useState } from 'react';

const QuestionInput = ({ question, index, onNext, onBack, answer: initialAnswer, answers }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(initialAnswer || '');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isFlexible, setIsFlexible] = useState(false);
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');
    const [pets, setPets] = useState('');

    const handleSelect = (value) => {
        setSelectedAnswer(value);
    };

    const handleDateRangeSelect = (start, end) => {
        setStartDate(start);
        setEndDate(end);
        setSelectedAnswer({ startDate: start, endDate: end });
    };

    const handleFlexibleChange = (checked) => {
        setIsFlexible(checked);
        if (checked) {
            setSelectedAnswer("Flexible");
        } else {
            setSelectedAnswer('');
        }
    };

    const handleNext = () => {
        if (index === 4) {
            onNext({ adults, children, pets });
        } else {
            onNext(selectedAnswer);
        }
        setSelectedAnswer(null);
        setIsFlexible(null)
    };

    const renderInput = () => {
        const activities = answers[0] === "Adventure" ? ["Hiking", "Camping", "Skiing", "Surfing", "Other"] : ["Beach", "Spa", "Other"];
        const travelTypes = ['Adventure', 'Relaxation']
        const destinations = ["Option 1", "Option 2", "Option 3"]
        switch (index) {
            case 0:
                return (
                    <>
                        {travelTypes.map((option, idx) => (
                            <button
                                key={idx}
                                className={`btn m-2 ${selectedAnswer === option ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                );
            case 1:
                return (
                    <>
                        {activities.map((option, idx) => (
                            <button
                                key={idx}
                                className={`btn m-2 ${selectedAnswer === option ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                );
            case 2:
                return (
                    <div className="date-range-picker">
                        <div className="mb-2">
                            <label style={{ display: 'block', textAlign: 'left' }}>Arrive</label>
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => handleDateRangeSelect(e.target.value, endDate)}
                                value={startDate}
                                placeholder="Start Date"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', textAlign: 'left' }}>Depart</label>
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => handleDateRangeSelect(startDate, e.target.value)}
                                value={endDate}
                                placeholder="End Date"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <input
                            type="number"
                            className="form-control mb-2"
                            onChange={(e) => handleSelect(e.target.value)}
                            value={isFlexible ? '' : selectedAnswer}
                            disabled={isFlexible}
                        />
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="flexibleCheckbox"
                                checked={isFlexible}
                                onChange={(e) => handleFlexibleChange(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexibleCheckbox">
                                I am flexible with choosing options
                            </label>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div>
                            <label style={{ display: 'block', textAlign: 'left' }}>Adults</label>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => setAdults(e.target.value)}
                                value={adults}
                                placeholder="Required"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', textAlign: 'left' }}>Children below 3 years old</label>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => setChildren(e.target.value)}
                                value={children}
                                placeholder="Optional"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', textAlign: 'left' }}>Pets</label>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => setPets(e.target.value)}
                                value={pets}
                                placeholder="Optional"
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <>
                        {['Yes', 'No'].map((option, idx) => (
                            <button
                                key={idx}
                                className={`btn m-2 ${selectedAnswer === option ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                );
            case 6:
                return (
                    <div>
                        <div className="input-group mb-2">
                            <span className="input-group-text">$</span>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => handleSelect(e.target.value)}
                                value={isFlexible ? '' : selectedAnswer}
                                disabled={isFlexible}
                            />
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="flexibleCheckbox"
                                checked={isFlexible}
                                onChange={(e) => handleFlexibleChange(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexibleCheckbox">
                                I don't have a specific budget
                            </label>
                        </div>
                    </div>
                );
            case 7:
                return (
                    <>
                        {['Low', 'Medium', 'High'].map((option, idx) => (
                            <button
                                key={idx}
                                className={`btn m-2 ${selectedAnswer === option ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                );
            case 8:
                return (
                    <>
                        {destinations.map((option, idx) => (
                            <button
                                key={idx}
                                className={`btn m-2 ${selectedAnswer === option ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                );
            default:
                return (
                    <>Welcome to TripSync</>
                );
        }
    };

    const isNextButtonDisabled = () => {
        if (index === 2) {
            return !(startDate && endDate);
        }
        if (index === 4) {
            return !adults; // Only require adults for case 4
        }
        return !selectedAnswer;
    };

    return (
        <div className="card p-4 mb-3">
            <h4 className="mb-3">{question}</h4>
            <div className="mt-3 text-center">
                {renderInput()}
            </div>
            <div className="mt-4 text-center">
                <button className="btn btn-secondary me-2" onClick={onBack} disabled={index === 0}>
                    Back
                </button>
                <button className="btn btn-primary" onClick={handleNext} disabled={isNextButtonDisabled()}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default QuestionInput;
