import React from 'react';

export default class MinuteHand extends React.Component {
  render() {
    var rotation = this.props.date.getMinutes() * 6;

    return (
      <line
        x1="150"
        y1="150"
        x2="150"
        y2="60"
        stroke="black"
        strokeWidth="3"
        transform={`rotate(${rotation}, 150, 150)`} />
    );
  }
}

MinuteHand.propTypes = {
  date: React.PropTypes.object.isRequired
};
