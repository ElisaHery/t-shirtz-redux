import React, { Component } from "react";

import "./Produit.css";

class Produit extends Component {
  state = {};
  render() {
    return (
      <div className="produit">
        <img className="image" src={this.props.src} />
        <p className="product_name">{this.props.name}</p>
        <p className="product_price">{this.props.price} €</p>
      </div>
    );
  }
}

export default Produit;
