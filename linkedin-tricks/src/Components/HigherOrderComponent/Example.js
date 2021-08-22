import React, { Component } from "react";
import HOC from "./HigherOrderComponent";

class Add extends React.Component {
  render() {
    return (
      <button className="me-2" onClick={() => this.props.handleCLick(1)}>
        Add <span>({this.props.number})</span>
      </button>
    );
  }
}

export const AddToCounter = HOC(Add);

class Subtract extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.handleCLick(-1)}>
        Subtract <span>({this.props.number})</span>
      </button>
    );
  }
}
export const MinusCounter = HOC(Subtract);

class Reset extends React.Component {
  render() {
    return (
      <button className="me-2" onClick={this.props.handleReset}>
        Reset <span>({this.props.number})</span>
      </button>
    );
  }
}
export const ResetCounter = HOC(Reset, 10);

export const HOCExample = () => {
  return (
    <React.Fragment>
      <p>Higher Order Component</p>
      <hr />
      <AddToCounter />
      <ResetCounter />
      <MinusCounter />
    </React.Fragment>
  );
};
