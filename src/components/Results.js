import React, {useEffect, useState} from "react";

const Results = ({results, setStatus}) => {
    const [totalVotes, setTotalVotes] = useState(0);

    useEffect( () => {
        // basic logic to get the total number of votes in the poll. Needed for progress bar rendering
        let total = 0;
        results.forEach( r => {total += r.votes })
        setTotalVotes(total);
    }, [results])

    return(
        <div className="card shadow-sm" id="results-card">
            <div className="card-header bg-primary text-white">
                Results
            </div>
            <div className="card-body">
                {results.map( result => (
                    <div className="my-2" key={result.id}>
                        <span>{result.text}</span>
                        <div className="progress" style={{"height":"1.5rem"}}>
                            <div className="progress-bar bg-success" role="progressbar" id={`${result.id}-pb`} style={{"width": (result.votes/totalVotes)*100+"%"}}>
                                <span className="text-white">{result.votes}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                <a href="#" onClick={ () => setStatus('not-answered')}>Answer Again</a>
            </div>
        </div>
    )
}

export default Results;