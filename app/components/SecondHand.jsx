import React from 'react';

export default class SecondHand extends React.Component {
  render() {
    var rotation = this.props.date.getSeconds() * 6;

    return (
      <line
        x1="150"
        y1="150"
        x2="150"
        y2="60"
        stroke="red"
        strokeWidth="2"
        transform={`rotate(${rotation}, 150, 150)`} />
    );
  }
}

SecondHand.propTypes = {
  date: React.PropTypes.object.isRequired
};
