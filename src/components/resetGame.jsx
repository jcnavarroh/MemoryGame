import React from 'react';

const ResetGame = () => {

    const onResetGame = () => window.location.reload(true);

    return (
        <button onClick={onResetGame} className="btn btn-secondary">
            Reset Game
        </button>
    )

}

export default ResetGame;