// src/js/reducers/index.js

const initialState = {
  filtered_price: 40,
  filtered_themes: [],
  filtered_colors: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_PRICE":
      //console.log(action.payload);
      return { ...state, filtered_price: action.payload };
    // return { ...state, articles: [...state.articles, action.payload] }; --> on ajoute la valeur aux valeurs déjà existantes

    case "FILTER_THEMES":
      //return { ...state, filter_price: [action.payload] };
      //console.log(action.payload);
      // return {
      return { ...state, filtered_themes: action.payload };
    //   // ...state,
    //   // filtered_themes: [...state.filtered_themes, action.payload]
    // };

    case "FILTER_COLORS":
      //return { ...state, filter_price: [action.payload] };
      //console.log(action.payload);
      return { ...state, filtered_colors: action.payload };

    default:
      return state;
  }
};
export default rootReducer;
