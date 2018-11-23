import React, { Component } from "react";

import { connect } from "react-redux";
import { FilterByColors } from "./../../actions";

class FilterColorsClass extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredColors: [] };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.currentTarget.dataset.value;
    //console.log(value);

    if (!this.state.filteredColors.includes(value)) {
      this.state.filteredColors.push(value);
      this.props.FilterByColors(this.state.filteredColors);
      //console.log(this.state.filteredColors);
    } else {
      let themeIndex = this.state.filteredColors.indexOf(value);
      this.state.filteredColors.splice(themeIndex, 1);
      this.props.FilterByColors(this.state.filteredColors);
      //console.log(this.state.filteredColors);
    }
  }

  render() {
    return (
      <div className="color_wrap">
        <div
          className="input_color grey"
          data-value="grey"
          onClick={this.handleInputChange}
        />
        <div
          className="input_color red"
          data-value="red"
          onClick={this.handleInputChange}
        />
        <div
          className="input_color blue"
          data-value="blue"
          onClick={this.handleInputChange}
        />
        <div
          className="input_color white"
          data-value="white"
          onClick={this.handleInputChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    FilterByColors: element => dispatch(FilterByColors(element))
  };
};

const FilterColors = connect(
  null,
  mapDispatchToProps
)(FilterColorsClass);
export default FilterColors;
