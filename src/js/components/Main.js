import React, { Component } from "react";
import { connect } from "react-redux";

import Produit from "./Produit.js";
import tshirt1 from "./../../assets/tshirt1.jpg";
import tshirt2 from "./../../assets/tshirt2.jpg";
import tshirt3 from "./../../assets/tshirt3.jpg";
import tshirt4 from "./../../assets/tshirt4.jpg";
import tshirt5 from "./../../assets/tshirt5.jpg";
import tshirt6 from "./../../assets/tshirt6.jpg";
import tshirt7 from "./../../assets/tshirt7.jpg";
import tshirt8 from "./../../assets/tshirt8.jpg";
import tshirt9 from "./../../assets/tshirt9.jpg";
import tshirt10 from "./../../assets/tshirt10.jpg";
import tshirt11 from "./../../assets/tshirt11.jpg";
import tshirt14 from "./../../assets/tshirt14.jpg";

import "./Main.css";

const mapStateToProps = state => {
  return {
    filters: {
      filtered_price: state.filtered_price,
      filtered_themes: state.filtered_themes,
      filtered_colors: state.filtered_colors
    }
  };
};

class ItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProducts: [],
      products: [
        {
          name: "Tshirt 'Appelle moi Dieu'",
          price: 20,
          src: tshirt1,
          theme: "autres",
          color: "blue"
        },
        {
          name: "Tshirt 'saucisson'",
          price: 30,
          src: tshirt2,
          theme: "autres",
          color: "red"
        },
        {
          name: "Tshirt 'Pile en retard'",
          price: 15,
          src: tshirt3,
          theme: "autres",
          color: "white"
        },
        {
          name: "Tshirt 'week-end à Rhum'",
          price: 25,
          src: tshirt4,
          theme: "alcool",
          color: "blue"
        },
        {
          name: "Tshirt 'A comme Apéro'",
          price: 25,
          src: tshirt5,
          theme: "alcool",
          color: "blue"
        },
        {
          name: "Tshirt 'Abdos Kro'",
          price: 28,
          src: tshirt6,
          theme: "alcool",
          color: "blue"
        },
        {
          name: "Tshirt 'In saucisson we trust'",
          price: 25,
          src: tshirt7,
          theme: "autres",
          color: "white"
        },
        {
          name: "Tshirt 'amour et football'",
          price: 35,
          src: tshirt8,
          theme: "football",
          color: "grey"
        },
        {
          name: "Tshirt 'pas besoin d'abdos",
          price: 25,
          src: tshirt9,
          theme: "autres",
          color: "white"
        },
        {
          name: "Tshirt 'Attaquant de pinte'",
          price: 19,
          src: tshirt10,
          theme: "alcool",
          color: "grey"
        },
        {
          name: "Tshirt '1998-2018'",
          price: 40,
          src: tshirt11,
          theme: "football",
          color: "blue"
        },
        {
          name: "Tshirt 'Super papa'",
          price: 25,
          src: tshirt14,
          theme: "papa",
          color: "white"
        }
      ]
    };
  }

  render() {
    const filtered_price = this.props.filters.filtered_price;
    const { filtered_themes, filtered_colors } = this.props.filters;

    const tshirts = this.state.products
      .filter(
        tshirt =>
          filtered_colors.length === 0 || filtered_colors.includes(tshirt.color)
      )
      .filter(tshirt => tshirt.price <= filtered_price)
      .filter(
        tshirt =>
          filtered_themes.length === 0 || filtered_themes.includes(tshirt.theme)
      );

    return (
      <div className="main">
        {tshirts.map(element => (
          <Produit
            name={element.name}
            price={element.price}
            src={element.src}
            key={element.name}
          />
        ))}
      </div>
    );
    // }
  }
}

export default connect(mapStateToProps)(ItemsContainer);
