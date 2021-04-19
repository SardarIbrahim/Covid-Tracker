const initialState = {
  totalDeaths: null,
  totalConfirmed: null,
  totalRecovered: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'GLOBAL_DATA') {
    return {
      ...state,
      totalDeaths: action.Deaths,
      totalConfirmed: action.Confirmed,
      totalRecovered: action.Recovered,
    };
  }
  return state;
};

export default reducer;
