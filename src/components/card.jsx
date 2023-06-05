import React from 'react';

const Card = (props) => {
    const onCardClicked = async () => {
        if(props.pending) {
            return;
        }
        if(!props.viewCards[props.cardIndex]) {
            let updatedViewCards = [...props.viewCards];
            updatedViewCards[props.cardIndex] = true;
            props.setViewCards(updatedViewCards)
            if(props.firstCard.id) { 
                props.setPending(true)
                if(props.firstCard.id === props.card.id){
                    setTimeout(() => {
                        let updatedRemoveCards = [...props.removeCards];
                        updatedRemoveCards[props.cardIndex] = true;
                        updatedRemoveCards[props.firstCard.index] = true;
                        props.setRemoveCards(updatedRemoveCards)
                        props.setFirstCard({index: null, id: null})
                        let newScore = [...props.hits];
                        if(props.player) {
                            newScore[0]++;
                        } else {
                            newScore[1]++;
                        }
                        props.setHits(newScore);
                        if(!updatedRemoveCards.includes(false)){
                            props.setGameOver(true)
                        }
                        props.setPending(false)  
                    }, 1500);
                    
                } else {
                    props.setFirstCard({index: null, id: null})
                    setTimeout(()=>{
                        props.setPlayer(!props.player)
                        let updatedViewCards = [...props.viewCards];
                        updatedViewCards[props.cardIndex] = false;
                        updatedViewCards[props.firstCard.index] = false;
                        props.setViewCards(updatedViewCards)
                        props.setPending(false)
                        let newScore = [...props.misses];
                        if(props.player) {
                            newScore[0]++;
                        } else {
                            newScore[1]++;
                        }
                        props.setMisses(newScore);
                    }, 1500)                    
                }
            } else {
                props.setFirstCard({index: props.cardIndex, id: props.card.id})
            }
        }
    }
    return(<div className={props.removeCards[props.cardIndex] ? "game-card--fixed" :"game-card"} onClick={onCardClicked}>
        {!props.removeCards[props.cardIndex] && props.viewCards[props.cardIndex] && 
            <>
                <div className="card-image card-image--show" style={{ 
                    backgroundImage: `url("${props.card.image}")` 
                }}/>
                <div className="card-name"> 
                    {props.card.name}
                </div>
            </>
        }

        {props.removeCards[props.cardIndex] && 
            <>
                <div className="card-image card-image--fixed" style={{ 
                    backgroundImage: `url("${props.card.image}")` 
                }}/>
                <div className="card-name"> 
                    {props.card.name}
                </div>
            </>
        }

        {!props.removeCards[props.cardIndex] && !props.viewCards[props.cardIndex] && 
        <>
            <div className="card-image card-image--hide">
                <span>?</span>
            </div>
            <div className="card-name"> 
                Click to view card
            </div>
        </>}
    </div>)
}

export default Card;