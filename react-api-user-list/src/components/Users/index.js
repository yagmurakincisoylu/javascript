import React, {useEffect, useState} from "react";
import './styles.css';
import List from "./List";
import Form from "./Form";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const userData = data.map(user => (
            {
              fullname : user.name,
              email: user.email,
              phone: user.phone
            }
          )
        )

        setUsers(userData)
      })
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="container">
      <h1>User List</h1>
      <List users={users}/>
      <Form addUser={setUsers} users={users}/>
    </div>
  );
}

export default Users;