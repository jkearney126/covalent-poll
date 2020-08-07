import React, {useState} from "react";
import Question from "./Question";
import Results from "./Results";

const pollQuestion = {
    id: "1",
    question: "How do you guys feel about glaucoma?",
    choices: [
        { id: 1, text: "I feel great!" },
        { id: 2, text: "I do not feel good, at all." },
        { id: 3, text: "Confused by this question." },
    ],
};

const currentResults = [
    { id: 1, text: "I feel great!", votes: 32 },
    { id: 2, text: "I do not feel good, at all.", votes: 8 },
    { id: 3, text: "Confused by this question.", votes: 17 },
];

const Poll = () => {
    const [status, setStatus] = useState('not_answered'); // Should we display question or results?
    const [selection, setSelection] = useState(1);

    const updateResults = () => {
        // api placeholder to show fetching & promises
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then( () => {
                currentResults.find( x => x.id === selection).votes++;
                setStatus('answered');
            })
    }

    return(
        <>
            {status === 'answered' ?
                <Results results={currentResults} setStatus={setStatus} />
                :
                <Question question={pollQuestion} selection={selection} setSelection={setSelection} updateResults={updateResults} />
            }
        </>
    )
}

export default Poll;