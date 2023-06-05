import React from 'react';
import Score from './score';

const Result = (props) => {
    let [message, setMessage] = React.useState('')
    React.useEffect(()=>{
        if(props.hits[0] === props.hits[1]) {
            if( props.misses[0] > props.hits[1]) {
                setMessage(`It's a draw. But ${props.playerNames[0]} wins because misses less`);
            } else if( props.misses[0] < props.hits[1] ) {
                setMessage(`It's a draw. But ${props.playerNames[1]} wins because misses less`);
            } else {
                setMessage("It was a awesome game. It's a total draw. BOTH PLAYERS WIN");
            }
        } else if(props.hits[0] > props.hits[1]) {
            setMessage(`CONGRATULATIONS!, ${props.playerNames[0]}. You win`);
        } else {
            setMessage(`CONGRATULATIONS!, ${props.playerNames[1]}. You win`);
        }
    }, [props.score, props.playerNames])
    return(<div className="result">
        <div className="result-icon">
            Win Icon
        </div>
        <div className="title">{message}</div>
        <div><Score {...props}/></div>
        <button className="game-button" onClick={()=>{props.setGameOver(false);
            props.setHits([0, 0]);
            props.setMisses([0, 0]);
            props.setStartGame(false)}}>Play again!</button>
    </div>)
}

export default Result;