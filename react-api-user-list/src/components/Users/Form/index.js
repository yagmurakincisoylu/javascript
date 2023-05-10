import React, {useState} from "react";

const initialFormValues = {
  fullname: "",
  email: "",
  phone: ""
}

function Form({addUser, users}) {
  const [form, setForm] = useState(initialFormValues);

  const addNewUser = event => {
    setForm(prevForm => (
      {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    ))
  }

  const onSubmit = event => {
    event.preventDefault();

    if(form.fullname === "" || form.email === "" || form.phone === "") {
      return;
    }
    
    addUser([...users, form]);

    setForm(initialFormValues);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="fullname"
          value={form.fullname}
          placeholder="Name"
          onChange={addNewUser}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={addNewUser}
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          placeholder="Phone"
          onChange={addNewUser}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
