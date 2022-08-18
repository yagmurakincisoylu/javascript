import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const cardElement = data.map(item => {
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cardElement}
    </div>
  );
}

export default App;
