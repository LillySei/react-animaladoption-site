import React from "react";
import "./Form.css";

function Form({ onSearch }) {
  const handleSearch = (e) => {
    const term = e.target.value;
    onSearch(term);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Which pet are you looking for?"
        onChange={handleSearch}
      />
    </form>
  );
}

export default Form;
