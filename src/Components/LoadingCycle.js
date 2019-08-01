import React, { Component } from "react";

class LoadingCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      complete: false
    };
    this.cycleState = this.cycleState.bind(this);
  }
  cycleState = n => {
    if (!n) {
      n = 0;
    }
    console.log(n);
    if (n < this.props.states.length) {
      this.setState({ step: n });
      n++;
      this.timerHandle = setTimeout(() => {
        this.cycleState(n);
      }, this.props.states[this.state.step].duration);
    } else {
      this.setState({ complete: true });
    }
  };

  componentDidMount() {
    this.cycleState();
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }

  render() {
    if (this.state.complete) {
      window.location = this.props.urlOnComplete;
    }

    return (
      <>
        <h1>{this.props.states[this.state.step].emoji}</h1>
        <p>{this.props.states[this.state.step].text}</p>
      </>
    );
  }
}

export default LoadingCycle;
