import React from "react";

function Box(props) {
  const {on, toggle} = props

  const styles = {
    backgroundColor: on === true ? "teal" : "transparent"
  }

  return (
    <div 
      className="box" 
      onClick={toggle}
      style={styles}
    >
    </div>
  )
}

export default Box;