import React from 'react';

const Messages = (props) => {
    return(<div className="message">
        {props.player && <React.Fragment>{props.playerNames[0]}, It's your turn</React.Fragment>}
        {!props.player && <React.Fragment>{props.playerNames[1]}, It's your turn</React.Fragment>} 
    </div>)
}

export default Messages;