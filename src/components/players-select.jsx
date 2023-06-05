import React from 'react'

const PlayersSelect = (props) => {
    let [defaultPlayerNames, setDefaultPlayerNames] = React.useState([props.playerNames[0], props.playerNames[1]])
    let [invalidFields, setInvalidFields] = React.useState([false, false])

    const onInputChange = (e) => {
        let newPlayerNames = [...defaultPlayerNames]
        if(e.target.name === 'player1') {
            newPlayerNames[0] = e.target.value;
        } else {
            newPlayerNames[1] = e.target.value;
        }
        setDefaultPlayerNames(newPlayerNames)
        checkValidity(newPlayerNames)
    }
    
    const onInputClick = (e) => {
        e.target.value = " ";
    }

    const checkValidity = (playerNames) => {
        let updatedInvalidFields = [...invalidFields]
        if(playerNames[0].trim() === "") {
            updatedInvalidFields[0] = true;
        } else {
            updatedInvalidFields[0] = false;
        }
        if(playerNames[1].trim() === "") {
            updatedInvalidFields[1] = true;
        } else {
            updatedInvalidFields[1] = false;
        }
        setInvalidFields(updatedInvalidFields)
    }

    const onStartClick = () => {
        if(!invalidFields.includes(true)) {
            props.setPlayerNames(defaultPlayerNames)
            props.setStartGame(true)
        }
    }

    return(<div className="players-select">
        <div className="players-select-title">Complete with the names of players.</div>
        <div className="players-form">
            <div className="player-main player-main-1">
                <div>
                    Player 1
                </div>
                <div>
                    <input className="form-element" name="player1" onChange={onInputChange} value={defaultPlayerNames[0]} placeholder={defaultPlayerNames[0]} onClick={onInputClick}/>
                    {invalidFields[0] && <div className="form-error-message">Please, set a name!</div>}
                </div>
                
            </div>
            <div className="player-main player-main-2">
                <div>
                    Player 2
                </div>
                <div>
                    <input className="form-element" name="player2" onChange={onInputChange} value={defaultPlayerNames[1]} placeholder={defaultPlayerNames[1]} onClick={onInputClick}/>
                    {invalidFields[1] && <div className="form-error-message">Please, set a name!</div>}
                </div>
                
            </div>
        </div>
        <button className="game-button start-button" onClick={onStartClick}>Start</button>  
    </div>)
}

export default PlayersSelect;