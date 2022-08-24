import React from "react";

function Joke(props) {
  const [showPunchline, setShowPunchline] = React.useState(false);

  const {setup, punchline} = props;

  function toggle() {
    setShowPunchline(prevShowPunchline => !prevShowPunchline)
  }

  return (
    <div className="joke">
      {setup && <h3>{setup}</h3>}
      {showPunchline && <p>{punchline}</p>}
      <button onClick={toggle}>{showPunchline ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Joke;
