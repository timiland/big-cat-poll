import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Banner extends Component {
  state = { active: true };

  deleteBanner = () => {
    this.setState({ active: false });
  };

  render() {
    if (!this.state.active) {
      return null;
    } else {
      return (
        <div id="banner">
          Welcome to the Big Cat Poll. Here you can vote for your favourite big
          cat and also find out more about big cats.
          <svg onClick={this.deleteBanner} className="closeButton float-right" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
        </div>
      );
    }
  }
}

export default Banner;
