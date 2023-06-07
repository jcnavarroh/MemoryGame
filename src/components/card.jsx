import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

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
    return(
        <div className={props.removeCards[props.cardIndex] ? "game-card game-card--fixed" :"game-card"} onClick={onCardClicked}>
            <div className="card">
                
                {!props.removeCards[props.cardIndex] && props.viewCards[props.cardIndex] && 
                    <div className="card--front text-center bg-primary">
                        <div className="card-image card-image--show card-img-top" style={{ 
                            backgroundImage: `url("${props.card.image}")` 
                        }}/>
                        <div className="card-body">
                            <p className="card-text card-name">{props.card.name}</p>
                        </div>
                    </div> 
                }

                {props.removeCards[props.cardIndex] && 
                    <div className="card--front text-center bg-primary">
                        <div className="card-image card-image--fixed card-img-top" style={{ 
                            backgroundImage: `url("${props.card.image}")` 
                        }}/>
                        <div className="card-body">
                            <p className="card-text card-name">{props.card.name}</p>
                        </div>
                    </div>
                }

                {!props.removeCards[props.cardIndex] && !props.viewCards[props.cardIndex] && 
                    <div className="card--back text-center bg-dark">
                        <div className="card-image card-image--hide card-img-top">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </div>
                        <div className="card-body">
                            <p className="card-text card-name">Click to view</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Card;