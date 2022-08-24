import React from "react";

function WindowTracker() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  React.useEffect(() => {
    function watchSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", watchSize);

    return function() {
      window.removeEventListener("resize", watchSize);
    }
  }, [])

  return (
    <div>
      <h1>Width: {windowSize.width} px</h1>
      <h1>Height: {windowSize.height} px</h1>
    </div>
  )
}

export default WindowTracker;