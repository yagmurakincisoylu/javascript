import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Order({orderData, setCompleteOrder}) {
  const orderList = orderData.map(item => {
    return (
      <div className="order-list__item" key={uuidv4()}>
        <p className="text">{item.name}</p>
        <button className="button text--small order-list__item__button">remove</button>
        <p className="text--middle">${item.price}</p>
      </div>
    )
  })

  const totalPrice = orderData.reduce(function(acc, element) {
    return acc + element.price
  }, 0)

  return (
    <div className="order-list">
      <h3 className="order-list__title">Your Order</h3>
      {orderList}
      <div className="order-list__total">
        <p className="text">Total Price:</p>
        <p className="text--middle">${totalPrice}</p>
      </div>
      <button className="button button-big" onClick={() => setCompleteOrder(true)}>Complete Order</button>
    </div>
  );
}

export default Order;