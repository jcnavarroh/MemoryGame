import React from 'react';
import Score from './score';
import Cards from './cards';
import Messages from './messages';

const Game = (props) => {
    let [player, setPlayer] = React.useState(true) //true for player 1, false for player 2
    let [viewCards, setViewCards] = React.useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    let [removeCards, setRemoveCards] = React.useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    let [pending, setPending] = React.useState(false)
    
    return(<div className="game-area">
        <Messages player={player} playerNames={props.playerNames}/>
        <Cards viewCards={viewCards} setViewCards={setViewCards}
            removeCards={removeCards} setRemoveCards={setRemoveCards}
            pending={pending} setPending={setPending}
            player={player} setPlayer={setPlayer} {...props} 
        />
        <Score hits={props.hits} misses={props.misses} playerNames={props.playerNames}/>
    </div>)
}

export default Game;