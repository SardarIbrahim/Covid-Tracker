const initialState = {
  countryDeaths: null,
  countryConfirmed: null,
  countryRecovered: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'COUNTRY_DATA') {
    return {
      ...state,
      countryDeaths: action.Deaths,
      countryConfirmed: action.Confirmed,
      countryRecovered: action.Recovered,
    };
  }
  return state;
};

export default reducer;
