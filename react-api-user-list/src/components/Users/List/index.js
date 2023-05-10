import React, {useState} from "react";

function List({users}) {
  const [filterText, setFilterText] = useState("");

  const filtered = users.filter(item => {
    return Object.keys(item).some(key => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  })

  return (
    <div className="user-container">
      <input
        type="text"
        value={filterText}
        placeholder="Search"
        onChange={event => setFilterText(event.target.value)}
        className="search-input"
      />
    
      
      <div className="grid-container categories">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
      </div>
      {
        filtered.map((user, i) => (
          <div key={i} className="grid-container user">
            <div>{user.fullname}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ))
      }
      
    </div>
  );
}

export default List;