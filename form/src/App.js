import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    isSubscribed: false
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if(formData.isSubscribed) {
      console.log("Thanks for subscribing for our newsletter!")
    }
  }


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        <input 
          type="checkbox"
          id="subscribeInput"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
          />
        <label htmlFor="subscribeInput">I want to subscribe the newsletter</label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
