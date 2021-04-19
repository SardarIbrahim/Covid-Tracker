import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import Xovid from '../assets/3653701.jpg';
import { NavLink } from 'react-router-dom';
import './chart.css';
export default class Chart extends Component {
  state = {
    chartData: {
      labels: ['Total Deaths', 'Total Confirmed', 'Total Recovered'],
      datasets: [
        {
          label: 'Covid-19 Cases',
          data: [],
          backgroundColor: ['#58508d', '#bc5090', '#ff6361'],

          borderWidth: 2,
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          fontColor: 'white',
        },
      ],
    },
  };

  // Global Raw Data
  componentDidMount = () => {
    const dataArray = this.state.chartData.datasets[0].data;
    fetch('https://corona.lmao.ninja/v2/all')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          dataArray: dataArray.push(data.deaths, data.active, data.recovered),
        })
      );
  };

  render() {
    return (
      // NavBar Or Header Section is Here
      <div className='chart'>
        <div className='img'>
          <div className='brand'>
            <div className='pic'>
              <NavLink to='/'>
                <img src={Xovid} alt='' />
              </NavLink>
            </div>

            <div className='track'>
              <NavLink to='/'>
                Covid <span style={{ color: 'red' }}>Data</span>
              </NavLink>
            </div>
          </div>

          <div className='stats'>
            <NavLink
              to='/statistics'
              activeStyle={{ border: '1px solid coral' }}
            >
              Statistics
            </NavLink>
          </div>
        </div>

        {/* Bar Chart is Here */}
        <div className='bar-chart'>
          <Pie
            data={this.state.chartData}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },

              title: {
                display: true,
                text: 'Global Stats Of Data',
                fontSize: 25,
                fontColor: '#ffbc20',
                margin: 0,
              },

              legend: {
                display: true,
                position: 'right',
                labels: {
                  fontColor: 'white',
                  fontSize: 14,
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}
