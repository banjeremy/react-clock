import React from 'react';

export default class HourHand extends React.Component {
  render() {
    var rotation = (this.props.date.getHours() % 12) * 30;

    return (
      <line
        x1="150"
        y1="150"
        x2="150"
        y2="90"
        stroke="black"
        strokeWidth="5"
        transform={`rotate(${rotation}, 150, 150)`}
        />
    );
  }
}

HourHand.propTypes = {
  date: React.PropTypes.object.isRequired
};
