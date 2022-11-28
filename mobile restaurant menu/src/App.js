import React, {useState} from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import menuData from "./menuData";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [orderData, setOrderData] = useState([]);
  const [completeOrder, setCompleteOrder] = useState(false);
  const [warning, setWarning] = useState(false);
  const [completeMessage, setCompleteMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: {},
    cvv: {}
  });

  const menuItems = menuData.map(item => {
    return (
      <Menu 
        key={uuidv4()}
        {...item}
        setOrderData={setOrderData}
      />
    )
  })

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(formData.name === "" || formData.cardNumber === {} || formData.cvv === {}) {
      setWarning(true);
      return;
    } else {
      setCompleteOrder(false);
      setWarning(false);
      setOrderData([]);
      setCompleteMessage(true);
    }
  }

  const handleNewOrder = () => {
    setOrderData([]);
    setCompleteOrder(false);
    setWarning(false);
    setCompleteMessage(false);
    setFormData({
      name: "",
      cardNumber: {},
      cvv: {}
    });
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Jimmy's Diner</h1>
        <p className="header__text">The best burgers and pizzas in town.</p>
      </header>
      <main>
        {menuItems}

        {orderData[0] && <Order orderData={orderData} setCompleteOrder={setCompleteOrder}/>}

        {completeMessage && 
          <div className="complete-container">
            <p className="complete-container__message">Thanks {formData.name}!<br />Your order is on its way!</p>
            <button className="button button-big" onClick={handleNewOrder}>New Order</button>
          </div>
        }

      </main>
      {completeOrder &&
        <form className="form">
          <p className="text">Enter Card Details</p>
            <input
              className="form__input"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              required
            />
            <input
              className="form__input"
              type="number"
              placeholder="Enter card number"
              required
            />
            <input
              className="form__input"
              type="number"
              placeholder="Enter CVV"
              required
            />
            <button type="submit" className="button button-big" onClick={handleSubmit}>Pay</button>

            {warning && <span className="form__warning">*** please fill all fields ***</span>}
            
        </form>}
    </div>
  );
}

export default App;
