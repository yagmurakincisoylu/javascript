import React from "react";
import jokesData from "./jokesData";
import Joke from "./components/Joke"


function App() {
  const jokesElement = jokesData.map(joke => (
    <Joke 
      key = {joke.id}
      setup = {joke.setup}
      punchline = {joke.punchline}
    />
  ))

  return (
    <div>
      {jokesElement}
    </div>
  );
}

export default App;
