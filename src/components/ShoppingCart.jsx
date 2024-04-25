import React from "react";
import "./Shoppingcart.css";
import { useShoppingCart } from "./ShoppingCartContext";
import { ACTIONS } from "./ShoppingCartContext";

const ShoppingCart = () => {
  const [state, dispatch] = useShoppingCart();

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function deleteAnimal(animalToDelete) {
    state.cart.filter((animal) => animal.id !== animalToDelete.id);
    dispatch({ type: ACTIONS.DELETE, payload: animalToDelete });
  }

  function handleAnimalCart(animalToDelete) {
    decrement();
    deleteAnimal(animalToDelete);
  }

  return (
    <div className="container">
      <div className="shopping-cart" id="shopping-cart">
        <p>Animals you adopted:</p>
        <p>
          {state.cart.map((animal) => (
            <div key={animal.id} className="animals">
              <div>{animal.name}</div>
              <div className="card-image">
                {animal.photos && animal.photos.length > 0 ? (
                  <img src={animal.photos[0].medium} alt="Placeholder" />
                ) : (
                  <img src="/tiere.jpeg" alt="Placeholder" />
                )}
              </div>
              {
                <button
                  className="btn"
                  onClick={() => handleAnimalCart(animal)}
                >
                  changed my mind
                </button>
              }
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
