import React from 'react';

const Score = (props) => {
    return(<div className="score-board">
        <div className="player-main player-main-1">
            <div className="player-name">
                {props.playerNames[0]}'s Score
            </div>
            <div className="player-score">
                <span>Hits: {props.hits[0]}</span>
                <span>Misses: {props.misses[0]} </span>
            </div>
        </div>
        <div className="player-main player-main-2">
            <div className="player-name">
                {props.playerNames[1]}'s Score
            </div>
            <div className="player-score">
                <span>Hits: {props.hits[1]}</span>
                <span>Misses: {props.misses[1]} </span>
            </div>
        </div>
    </div>)
}

export default Score;