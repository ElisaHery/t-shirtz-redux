import React, { Component } from "react";

import FilterPrice from "./Filters/FilterPrice.js";
import FilterThemes from "./Filters/FilterThemes.js";
import FilterColors from "./Filters/FilterColors.js";
import "./Sidebar.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <h2 className="text_sidebar">Filtrer</h2>
        <button>Reset filter</button>
        <hr />
        <h3 className="text_sidebar">Prix maximum</h3>
        <FilterPrice />
        <hr />
        <h3 className="text_sidebar">Themes</h3>
        <FilterThemes />
        <hr />
        <h3 className="text_sidebar">Couleurs</h3>
        <FilterColors />
      </div>
    );
  }
}

export default Sidebar;
