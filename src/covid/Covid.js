import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionCreators from '../reducers/actions/actions';
import './covid.css';
import Xovid from '../assets/3653701.jpg';
class Covid extends Component {
  render() {
    return (
      <div className='covid'>
        <div className='img'>
          <div className='brand'>
            <div className='pic'>
              <NavLink to='/'>
                <img src={Xovid} alt='' />
              </NavLink>
            </div>

            <div className='track'>
              <NavLink
                to='/'
                activeStyle={{ color: '#ffbc20' }}
                activeClassName='selected'
              >
                Covid <span style={{ color: 'red' }}>Data</span>
              </NavLink>
            </div>
          </div>

          <div className='stats'>
            <NavLink to='/statistics'>Statistics</NavLink>
          </div>
        </div>

        {/* Boxes Here */}
        <div className='global'>
          <div className='box'>
            <div className='inner'>
              <h2>Total Deaths</h2>
              <p>{this.props.deaths}</p>
            </div>
          </div>
          <div className='box'>
            <div className='inner'>
              <h2>Total Confirmed</h2>
              <p>{this.props.confirm}</p>
            </div>
          </div>
          <div className='box'>
            <div className='inner'>
              <h2>Total Recovered</h2>
              <p>{this.props.recovered}</p>
            </div>
          </div>
        </div>

        {/* Button Here */}
        <div className='btn'>
          <button onClick={this.props.getGlobalData}>Get Global Data</button>
        </div>

        {/* Form Here */}
        <form onSubmit={this.props.getCountryData}>
          <input type='text' placeholder='Enter Country Name' />
          <button type='submit'>Search</button>
        </form>

        {/* Boxes For Country Here */}
        {this.props.countryConfirmed ||
        this.props.countryDeaths ||
        this.props.countryRecovered ? (
          <div className='global'>
            <div className='box'>
              <div className='inner'>
                <h2>Total Deaths</h2>
                <p>{this.props.countryDeaths}</p>
              </div>
            </div>
            <div className='box'>
              <div className='inner'>
                <h2>Total Confirmed</h2>
                <p>{this.props.countryConfirmed}</p>
              </div>
            </div>
            <div className='box'>
              <div className='inner'>
                <h2>Total Recovered</h2>
                <p>{this.props.countryRecovered}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Global Data
    deaths: state.GlobalData.totalDeaths,
    confirm: state.GlobalData.totalConfirmed,
    recovered: state.GlobalData.totalRecovered,

    // Country Data
    countryDeaths: state.CountryData.countryDeaths,
    countryConfirmed: state.CountryData.countryConfirmed,
    countryRecovered: state.CountryData.countryRecovered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGlobalData: () => dispatch(actionCreators.getGlobalData()),
    getCountryData: (e) => dispatch(actionCreators.getCountryData(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Covid);
