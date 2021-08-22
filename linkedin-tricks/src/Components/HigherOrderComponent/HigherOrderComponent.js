import React from "react";

const HOC = (Component, data) => {
  return class extends React.Component {
    state = {
      count: data || 0,
    };

    handleClick = (value) => {
      this.setState({
        count: this.state.count + value,
      });
    };

    reset = () => this.setState({ count: 0 });

    render() {
      return (
        <Component
          number={this.state.count}
          handleCLick={this.handleClick}
          handleReset={this.reset}
        />
      );
    }
  };
};
export default HOC;
