import React, { Component } from 'react'
import './Error.css'
import Sad from '../assets/sad.png'
export default class Error extends Component {
  render() {
    return (
      <div className="Error">
        <h1 style={{ color: '#ffbc20' }}>Error Occurred..</h1>
        <div className="Error-info">
          <h3>Page Not Found</h3>
          <img src={Sad} alt="Sad Face" />
          <h3>Try Again Later Please...</h3>
        </div>

      </div>
    )
  }
}
