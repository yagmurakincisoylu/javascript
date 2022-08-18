import React from "react";
import data from "./data"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const cardElement = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container card-container">
        {cardElement}
      </div>
    </div>
  );
}

export default App;
