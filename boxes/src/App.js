import React from "react";
import Box from "./components/Box";
import boxesData from "./boxes"

function App() {
  const [boxes, setBoxes] = React.useState(boxesData);

  function toggle(id) {

    setBoxes(prevBoxes => prevBoxes.map(box => box.id === id ? {...box, on: !box.on} : box))
  }


  const boxElements = boxes.map(box => (
    <Box 
      key= {box.id}
      on= {box.on}
      toggle = {() => toggle(box.id)}
    />
  ));

  return (
    <div className="box-container">
      {boxElements}
    </div>
  );
}

export default App;
