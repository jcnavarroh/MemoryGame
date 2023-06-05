import React from 'react';
import ChangeUser from './changeUser';

const Header = (props) => {

    const onResetGame = () => window.location.reload(true);

    return(
        <div className="header navbar navbar-expand-lg bg-dark">
            <div className="title title-header">
                <h1>Memory Game</h1>
            </div>
            <div className="sub-title">
                <span>test your concentration</span>
            </div>
            <div className="header-score">
                {props.playerNames[0] && <span>{props.playerNames[0]}'s points: {props.hits[0]}</span>}
                {props.playerNames[1] && <span>{props.playerNames[1]}'s points: {props.hits[1]}</span>}
            </div>
            <div className="header-buttons">
                <ChangeUser/>
                <button onClick={onResetGame} className="btn btn-secondary">
                    Reset Game
                </button>
            </div>   
        </div>
    )
}

export default Header;