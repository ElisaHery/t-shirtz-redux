// src/js/actions/index.js
// import { ADD_ARTICLE } from "../constants/action-types";

export const FilterByPrice = priceLimit => ({
  type: "FILTER_PRICE",
  payload: priceLimit
});

export const FilterByThemes = checkedThemes => ({
  type: "FILTER_THEMES",
  payload: checkedThemes
});

export const FilterByColors = checkedColors => ({
  type: "FILTER_COLORS",
  payload: checkedColors
});
