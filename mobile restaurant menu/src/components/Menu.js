import React from "react";

function Menu({img, name, ingredients, price, setOrderData}) {

  const orderItem = () => {
    setOrderData(prevOrderData => prevOrderData.concat({name, price}));
  }

  return (
    <div className="item">
      <img 
        src={require(`../${img}`)}
        alt={`${name} icon`}
        className="item__img"
      />
      <div>
        <h2 className="text">{name}</h2>
        <p className="text--small">{ingredients.join(", ")}</p>
        <p className="text--middle">${price}</p>
      </div>
      <button 
        className="button item__button"
        onClick={orderItem}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Menu;