import React from 'react';
import Confetti from 'react-confetti'
import Die from './components/Die';

function App() {

  const [dice, setDice] = React.useState
  (allNewDice())
  
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    const allHeld = dice.every(die => die.isHeld)

    if(allSameValue && allHeld) {
      setTenzies(true)
      console.log("yey")
    } else {
      console.log("not yet")
    }

  }, [dice])
  
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1), isHeld: false,
      id: Math.random().toString(16).slice(2)
    }
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice;
  }

  const diceElements = dice.map(die => 
    (
      <Die 
        value={die.value} 
        isHeld={die.isHeld} 
        key={die.id}
        holdDice={() => holdDice(die.id)}
      />
    )
  )

  function rollDice() {
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">{tenzies ? "YOU WON! CONGRATS!" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button 
        className='roll-dice' 
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
