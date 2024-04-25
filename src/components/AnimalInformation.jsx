import React from "react";
import "./AnimalInformation.css";
import { useLocation } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCartContext";
import { ACTIONS } from "./ShoppingCartContext";

const AnimalInformation = () => {
  const location = useLocation();
  console.log("Location", location);

  const [, dispatch] = useShoppingCart();

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function addAnimalToCart() {
    //setShoppingCart([...shoppingCart, location.state.animal]);
    dispatch({ type: ACTIONS.ADD, payload: location.state.animal });
  }
  if (!location.state || !location.state.animal) {
    return <p>No animal information</p>;
  }

  function handleAdoption() {
    increment();
    addAnimalToCart();
  }

  return (
    <div className="animal-div" key={location.state.animal.id}>
      <h1>{location.state.animal.name}</h1>
      {location.state.animal.photos &&
      location.state.animal.photos.length > 0 ? (
        <img src={location.state.animal.photos[0].medium} alt="Placeholder" />
      ) : (
        <img src="/tiere.jpeg" alt="Placeholder" />
      )}
      <h3 className="card-text">{location.state.animal.type}</h3>
      <p className="card-text">{location.state.animal.description}</p>
      <ul className="tag-list">
        {location.state.animal.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button onClick={handleAdoption} className="adopt-btn">
        Adopt {location.state.animal.name}
      </button>
    </div>
  );
};

export default AnimalInformation;
