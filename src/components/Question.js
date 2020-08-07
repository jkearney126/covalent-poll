import React from "react";

const Question = ({question, selection, updateResults, setSelection}) => (
    <div className="card shadow-sm" id="question-card">
        <div className="card-header bg-primary text-white">
            {question.question}
        </div>
        <div className="card-body">
            {question.choices.map( choice => (
                <div className="form-check" key={choice.id}>
                    <input className="form-check-input" type="radio" name={choice.id} id={choice.id}
                           value={choice.text} checked={choice.id === selection} onChange={ () => setSelection(choice.id)}/>
                    <label className="form-check-label" htmlFor={choice.id}>
                        {choice.text}
                    </label>
                </div>))}
            <button type="submit" className="btn btn-primary" onClick={ () => updateResults()}>Submit</button>
        </div>
    </div>
);

export default Question;