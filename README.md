# MemoryGame
Game for improve your concentration

## Running the application

### Development Mode

Clone or download the project to your local drive <br />

On your command line, change directory to the project location <br />

Run the command `npm install` to install necessary node_modules<br />

Run the command `npm start`. This will run the app in the development mode. It must open the game in a browser window<br />

If you can't see the game automatically, you can open [http://localhost:3000](http://localhost:3000) to view the game in the browser.<br />


## Application Design

The Design was provide for my own imagination, using a palette of colors to override the bootstrap default colors.

### Technology Overview

This application utilizes React as a SPA platform<br />

CSS Bootstrap has been used. It have custom styling done with pure CSS/ flexbox / SASS<br />

React Hooks have been used for local state management and lifecycle methods<br />

It includes basic form validation for player names form, with customized error messages<br />


### Components Structure

The application consists of 11 different components structured as follows:

`<App />` Containing the whole application <br />

> `<Header />` Visible at all times<br />

> `<PlayersSelect />`If visible, `Game` and `Result` components will not be visible. This will allow players to assign their names<br />

> `<Game />` If visible, `PlayerSelect` and `Result` components will not be visible<br />

> > `<Score />` Displays the score<br />

> > `<Messages />` Displays a message describing who is playing<br />

> > `<Cards />` The game boards. It saps a cards array and displays them on the board<br />

> > > `<Card />` Displays individual representation of each element in a cards array<br />

> `<Result /> `If visible, `PlayersSelect` and `Game` components will not be visible. Shows who won the game, and gives the players an option to replay<br />

> `<ChangeUser />` Permit to the player change the name setted because it is save in the localStorage<br />

> `<ResetGame />` Permit to the player start a new game using a button<br />

> `<Footer />` Visible at all times

### Design Logic
It logic design was based on the requeriments send for tech interviw of the Modyo company

##### Toggling between `PlayersSelect`, `Game` and `Result` Components
Only one of these components will be visible at a time. Toggling between them is done through two Booleans created within the state of '`<App />` component. These two variables are called `gameOver` and `startGame`. Conditions for viewing these components are as follows<br />- `<PlayersSelect />` is displayed when`gameOver` = false, `startGame` = false<br />- `<Game />` is displayed when`gameOver` = false, `startGame` = true<br />- `<Result />` is displayed when`gameOver` = true, `startGame` = true<br />

##### Cards array, creating the card deck and shuffling it
- A base Array of cards has been created in an external file `cards-array.js` to keep the code cleaner. The `array` is an array of objects with 3 keys for each card: `id`, `image` and `name`. For images, the game consume the resources of the API endpint for animals pictures of Modyo Company.

- A `useEffect` method in the  `<App />` component create the logic for duplicate the cards array, and calls a shuffle method. Then the shuffled array is passed as props to the `<Game />` component. The `useEffect` method is recalled whenever the value of the Boolean `gameOver` changes.

##### Game logic
- Two arrays have been created within the `<Game /> `component state to manage viewing and removing cards. They both had initial values of false:
    - `viewCards`: Whenever a cards is clicked, the card index representation in this array is changed to true. If there was no match after two cards are clicked, these cards index representation will be switched back to false. 
    - `removeCards`: Whenever two cards match, the cards index representation in this array are change to true and they disappear from the deck. After all the values in this array are changed to true, the Boolean `gameOver` in the `<App />` component is changed to true.

- A Boolean `player` in `<Game />` component is used to identify which player is currently playing. It is set to true for player 1 and false for player 2

- A variable in the state of `<Cards />` with the name of `firstCard` is created that represents the first clicked card. The card is represented by an object with the keys of `index` and `id`. `index` is the index of the card in the shuffled array, and `id` is the card `id`. If the no first card has been selected yet, these values are set to `null`.

- When a second card is clicked. There is a delay of 1500ms before the cards are flipped again if there is no match, or removed from the board if there is a match. During this time, a Boolean `pending` is set to true to halt any code from execution if another card is clicked.
