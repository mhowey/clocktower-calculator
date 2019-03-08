import React, { Component } from 'react';
import countBellRings from '../lib/clocktowerCalc';

import kbraLogo from '../assets/kbraLogo.jpeg';
import tower from '../assets/clocktower-icon.png';
import '../styles/app.scss';

class App extends Component {
  state = {
    start: '02:00',
    end: '03:00',
    errorMessage: null,
  };

  componentDidMount() {
    this.startInput.focus();
  }

  handleStartChange = e => {
    this.setState({ start: e.target.value });
  };
  handleEndChange = e => {
    this.setState({ end: e.target.value });
  };
  getBellTolls = (start, end) => {
    this.setState({ start: start, end: end });
    countBellRings(this.state.start, this.state.end);
  };

  render() {
    return (
      <div className="screen-center">
        <div className="ui card">
          <div className="ui content center aligned">
            <img className="logo" src={kbraLogo} alt="kbra logo" />
            <h3 className="ui content center aligned">Clocktower Calculator</h3>

            <img className="tower" src={tower} alt="clocktower" />

            <div className="input-container">
              <div className="ui input with-label">
                <div className="label-container">
                  <label>Start:</label>
                </div>
                <input
                  maxLength="5"
                  className="input-container"
                  ref={input => {
                    this.startInput = input;
                  }}
                  value={this.state.start}
                  type="text"
                  id="start"
                  onChange={this.handleStartChange}
                />
              </div>
              <div className="ui input with-label">
                <div className="label-container">
                  <label>End:</label>
                </div>
                <input
                  maxLength="5"
                  value={this.state.end}
                  type="text"
                  id="end"
                  onChange={this.handleEndChange}
                />
              </div>
            </div>
            <div className="bell-counter ui statistic">
              <div className="label">The bell will toll</div>
              <div className="value">
                {countBellRings(this.state.start, this.state.end) ||
                  this.state.errorMessage}
              </div>
              <div className="label">
                times between {this.state.start} and {this.state.end}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
