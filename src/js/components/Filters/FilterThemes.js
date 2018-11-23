import React, { Component } from "react";

import { connect } from "react-redux";
import { FilterByThemes } from "./../../actions";

class FilterThemesClass extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredThemes: [] };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    if (!this.state.filteredThemes.includes(value)) {
      this.state.filteredThemes.push(value);
      this.props.FilterByThemes(this.state.filteredThemes);
      // console.log(this.state.filteredThemes);
    } else {
      let themeIndex = this.state.filteredThemes.indexOf(value);
      this.state.filteredThemes.splice(themeIndex, 1);
      this.props.FilterByThemes(this.state.filteredThemes);

      //console.log(this.state.filteredThemes);
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            className="input_theme"
            type="checkbox"
            id="football"
            value="football"
            onChange={this.handleInputChange}
          />
          <label htmlFor="football" className="text_sidebar">
            Football
          </label>
        </div>
        <div>
          <input
            className="input_theme"
            type="checkbox"
            id="femmes"
            value="femmes"
            onChange={this.handleInputChange}
          />
          <label htmlFor="femmes" className="text_sidebar">
            Femmes
          </label>
        </div>
        <div>
          <input
            className="input_theme"
            type="checkbox"
            id="alcool"
            value="alcool"
            onChange={this.handleInputChange}
          />
          <label htmlFor="alcool" className="text_sidebar">
            Alcool
          </label>
        </div>
        <div>
          <input
            className="input_theme"
            type="checkbox"
            id="papa"
            value="papa"
            onChange={this.handleInputChange}
          />
          <label htmlFor="papa" className="text_sidebar">
            Jeune papa
          </label>
        </div>
        <div>
          <input
            className="input_theme"
            type="checkbox"
            value="autres"
            id="autres"
            onChange={this.handleInputChange}
          />
          <label htmlFor="autres" className="text_sidebar">
            Autres{" "}
          </label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    FilterByThemes: article => dispatch(FilterByThemes(article))
  };
};

const FilterThemes = connect(
  null,
  mapDispatchToProps
)(FilterThemesClass);
export default FilterThemes;
