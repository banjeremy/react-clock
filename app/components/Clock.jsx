import React from 'react';
import SecondHand from './SecondHand.jsx';
import MinuteHand from './MinuteHand.jsx';
import HourHand from './HourHand.jsx';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = { date: new Date() };
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentDidMount() {
    this.intervals.push(setInterval(this.tick.bind(this), 1000));
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <svg width="300" height="300">
        <circle cx="150" cy="150" r="100" fill="transparent" stroke="black" strokeWidth="5" />
        <circle cx="150" cy="150" r="3" fill="transparent" fill="black" />
        <HourHand date={this.state.date} />
        <MinuteHand date={this.state.date} />
        <SecondHand date={this.state.date} />
      </svg>
    );
  }
}
