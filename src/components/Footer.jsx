import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", minHeight: "15vh" }}
    >
      <div className="footer">
        <p>Pet Adoption</p>
      </div>
    </div>
  );
}

export default Footer;
