import React, { useState } from "react";
import "./Shop.css";
import Card from "./Card";
import Form from "./Form";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animals, setAnimals] = useState([]);

  return (
    <div className="container">
      <h1 className="h1">Welcome to our Pet Shelter!</h1>
      <Form onSearch={(term) => setSearchTerm(term)}></Form>
      <Card
        searchTerm={searchTerm}
        animals={animals}
        setAnimals={setAnimals}
      ></Card>
    </div>
  );
}

export default Shop;
