export const Global = "GLOBAL_DATA";
export const Country = "COUNTRY_DATA";


// fetching data here 
export const gettingGlobal = (totalDeaths, totalRecovered, totalConfirmed) => {
  return {
    type: Global,
    Deaths: totalDeaths,
    Recovered: totalRecovered,
    Confirmed: totalConfirmed,
  }
}


export const gettingCountry = (CountryDeaths, CountryRecovered, CountryConfirmed) => {
  return {
    type: Country,
    Deaths: CountryDeaths,
    Recovered: CountryRecovered,
    Confirmed: CountryConfirmed,
  }
}



// Action Creators Here asynchronous Ones b/c we will use our synchronous code to execute or async actions
export const getGlobalData = () => {
  return dispatch => {
    fetch('https://corona.lmao.ninja/v2/all')
      .then(response => response.json())
      .then(data => dispatch(gettingGlobal(
        data.deaths,
        data.active,
        data.recovered)));
  }
}

export const getCountryData = (e) => {
  return dispatch => {
    // Blocking old action and executing func in between dispatching and reaching to reducer
    e.preventDefault();
    const country = e.target.children[0].value;
    console.log(country);
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
      .then(response => response.json())
      .then(data => dispatch(gettingCountry(
        data.deaths,
        data.active,
        data.recovered)));
  }
}