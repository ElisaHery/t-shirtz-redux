import React, { Component } from "react";
import { connect } from "react-redux";

import store from "../../store";
import { FilterByPrice } from "./../../actions";

const mapDispatchToProps = dispatch => {
  return {
    FilterByPrice: article => dispatch(FilterByPrice(article))
  };
};

const mapStateToProps = state => {
  return {
    filters: {
      filtered_price: state.filtered_price
    }
  };
};

class FilterRangeClass extends Component {
  constructor(props) {
    super(props);
    // this.state = { value: 40 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const filtered_price = parseInt(event.target.value);
    // this.setState({ value: filtered_price });
    this.props.FilterByPrice(filtered_price);
  }

  render() {
    // console.log(store.getState());
    return (
      <form>
        <input
          type="range"
          min="0"
          max="40"
          value={this.props.filters.filtered_price}
          onChange={this.handleChange}
        />
        <p className="text_sidebar"> {this.props.filters.filtered_price} €</p>
      </form>
    );
  }
}

//on connecte la classe avec le mapDisptachToProps
const FilterRange = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterRangeClass);
export default FilterRange;
