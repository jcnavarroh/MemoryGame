import React from 'react';
import "./styles/global.scss";

import Header from './components/header';
import Result from './components/result';
import Game from './components/game';
import Footer from './components/footer';
import PlayersSelect from './components/players-select';
import GetImages from './service/card-images';

const App = () => {
    let[cardsDeck, setCardsDeck] = React.useState([''])
    let[gameOver, setGameOver] = React.useState(false)
    let[startGame, setStartGame] = React.useState(false)
    let[playerNames, setPlayerNames] = React.useState(['Player 1', 'Player 2'])
    let[hits, setHits] = React.useState([0, 0])
    let[misses, setMisses] = React.useState([0, 0])
    let[cardImages, setCardImages] = React.useState([])

    // load user data from localStorage

    React.useEffect(() => {
        const players = JSON.parse(localStorage.getItem('playerNames'));
        const gameStatus = JSON.parse(localStorage.getItem('startGame'));

        if (players) {
            setPlayerNames(players);
        }

        if (gameStatus) {
            setStartGame(gameStatus);
        }

        getImagesData()

    }, []);

    // save user data into localStorage
    React.useEffect(() => {
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
        localStorage.setItem('startGame', JSON.stringify(startGame));
    }, [playerNames, startGame]);

    // Shuffle cards | duplicate the images and create a new sort set for cards
    React.useEffect( () => {

        if(cardImages.length !== 0) {
            let duplicateImagesArr = [...cardImages, ...cardImages]
            let shuffledCardSet = shuffle(duplicateImagesArr)
    
        //    console.log(`Duplicated Images: ${JSON.stringify(duplicateImagesArr)}`);
        //    console.log(`Shuffled Images: ${JSON.stringify(shuffledCardSet)}`);
    
            setCardsDeck(shuffledCardSet)
        } 

    }, [gameOver, cardImages] )

    const getImagesData = async() => {
        await GetImages().then(res => {
            //console.log(console.log(`Card images: ${JSON.stringify(res)} `));
            setCardImages(res)
        })
        
    }

    // shuffle function
    const shuffle = (arr) => {
        
        arr.sort( () => Math.random() - 0.5)
        .map((card) => ({ ...card, id: (Math.random() * 1000) }))
        return arr;
    }

    return (
        <div className="app">
            <Header hits={hits} misses={misses} playerNames={playerNames}/>
            <main className="main">
                {!startGame && <PlayersSelect playerNames={playerNames} setPlayerNames={setPlayerNames} setStartGame={setStartGame}/>}
                {startGame && !gameOver && <Game cardsDeck={cardsDeck} hits={hits} misses={misses} setHits={setHits} setMisses={setMisses} setGameOver={setGameOver} playerNames={playerNames}/>}
                {startGame && gameOver && <Result hits={hits} misses={misses} setHits={setHits} setMisses={setMisses} setGameOver={setGameOver} playerNames={playerNames} setStartGame={setStartGame}/>}
            </main>
            <Footer />
        </div>
    );
}

export default App;