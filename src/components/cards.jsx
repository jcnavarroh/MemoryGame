import React from 'react';
import Card from './card';

const Cards = (props) => {
    let [firstCard, setFirstCard] = React.useState({index: null, id: null})

    const renderCards = () => {
        return props.cardsDeck.map((card, index) => {
            return(<Card key={index} cardIndex={index} card={card}
                firstCard={firstCard} setFirstCard={setFirstCard} 
                {...props} />)
        })
    }

    return(<div className="game-cards">
        {renderCards()}
    </div>)
}

export default Cards;