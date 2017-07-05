import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import eases from 'eases';

export default class Counter extends Component {
  static propTypes = {
    start: PropTypes.number,
    end: PropTypes.number.isRequired,
    digits: PropTypes.number,
    time: PropTypes.number,
    easing: PropTypes.string,
    onComplete: PropTypes.func,
    style: PropTypes.any,
  };

  static defaultProps = {
    start: 0,
    digits: 0,
    time: 1000,
    easing: 'linear',
  };

  state = { value: this.props.start };

  componentDidMount() {
    this.startTime = Date.now();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    const { onComplete } = this.props;

    if (this.stop) {
      if (onComplete) onComplete();
      return;
    }

    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  }

  draw() {
    const { time, start, end, easing } = this.props;

    const now = Date.now();
    if (now - this.startTime >= time) this.stop = true;
    const percentage = Math.min((now - this.startTime) / time, 1);
    const easeVal = eases[easing](percentage);
    const value = start + (end - start) * easeVal;

    this.setState({ value });
  }

  render() {
    const { digits, style } = this.props;
    const { value } = this.state;

    return (
      <Text style={style}>{value.toFixed(digits)}</Text>
    );
  }
}
