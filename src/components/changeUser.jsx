import React from 'react';


const ChangeUser = () => {

    const onChangeUser = () => { 
        localStorage.removeItem('playerNames');
        localStorage.removeItem('startGame');

        window.location.reload(true);

    }

    return (
        <button onClick={onChangeUser} className="btn btn-primary">
            change player name
        </button>
    )

}

export default ChangeUser;