import React from 'react';


const Score = (props) => {
    return(
    
        <div className="score-board card container p-0 mt-5 mb-4">
            <div className="card-header text-center bg-secondary fw-bold">
                <h2>Match Score</h2>
            </div>
            <div class="card-body">
                <div class="player-main player-main-1">
                    <h3 className="player-name">
                        {props.playerNames[0]}'s Score
                    </h3>
                    <div className="player-score mt-2">
                        <span>Hits: {props.hits[0]}</span>
                        <span>Misses: {props.misses[0]} </span>
                    </div>              
                </div>

                <div class="player-main player-main-2">
                    <h3 className="player-name">
                        {props.playerNames[1]}'s Score
                    </h3>
                    <div className="player-score mt-2">
                        <span>Hits: {props.hits[1]}</span>
                        <span>Misses: {props.misses[1]} </span>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Score;